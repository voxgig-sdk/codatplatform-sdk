-- Codatplatform SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("codatplatform_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local CodatplatformSDK = {}
CodatplatformSDK.__index = CodatplatformSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

CodatplatformSDK._make_feature = _make_feature


function CodatplatformSDK.new(options)
  local self = setmetatable({}, CodatplatformSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: test


  return self
end


function CodatplatformSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function CodatplatformSDK:get_utility()
  return Utility.copy(self._utility)
end


function CodatplatformSDK:get_root_ctx()
  return self._rootctx
end


function CodatplatformSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function CodatplatformSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function CodatplatformSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function CodatplatformSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "CodatplatformSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function CodatplatformSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function CodatplatformSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "CodatplatformSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:AccessToken():list() / client:AccessToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:AccessToken(data)
  local EntityMod = require("entity.access_token_entity")
  if data == nil then
    if self._access_token == nil then
      self._access_token = EntityMod.new(self, nil)
    end
    return self._access_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:All():list() / client:All():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:All(data)
  local EntityMod = require("entity.all_entity")
  if data == nil then
    if self._all == nil then
      self._all = EntityMod.new(self, nil)
    end
    return self._all
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiKey():list() / client:ApiKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:ApiKey(data)
  local EntityMod = require("entity.api_key_entity")
  if data == nil then
    if self._api_key == nil then
      self._api_key = EntityMod.new(self, nil)
    end
    return self._api_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Branding():list() / client:Branding():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:Branding(data)
  local EntityMod = require("entity.branding_entity")
  if data == nil then
    if self._branding == nil then
      self._branding = EntityMod.new(self, nil)
    end
    return self._branding
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Company():list() / client:Company():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:Company(data)
  local EntityMod = require("entity.company_entity")
  if data == nil then
    if self._company == nil then
      self._company = EntityMod.new(self, nil)
    end
    return self._company
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CompanyAccessToken():list() / client:CompanyAccessToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:CompanyAccessToken(data)
  local EntityMod = require("entity.company_access_token_entity")
  if data == nil then
    if self._company_access_token == nil then
      self._company_access_token = EntityMod.new(self, nil)
    end
    return self._company_access_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Connection():list() / client:Connection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:Connection(data)
  local EntityMod = require("entity.connection_entity")
  if data == nil then
    if self._connection == nil then
      self._connection = EntityMod.new(self, nil)
    end
    return self._connection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConnectionManagementAccessToken():list() / client:ConnectionManagementAccessToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:ConnectionManagementAccessToken(data)
  local EntityMod = require("entity.connection_management_access_token_entity")
  if data == nil then
    if self._connection_management_access_token == nil then
      self._connection_management_access_token = EntityMod.new(self, nil)
    end
    return self._connection_management_access_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConnectionManagementAllowedOrigin():list() / client:ConnectionManagementAllowedOrigin():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:ConnectionManagementAllowedOrigin(data)
  local EntityMod = require("entity.connection_management_allowed_origin_entity")
  if data == nil then
    if self._connection_management_allowed_origin == nil then
      self._connection_management_allowed_origin = EntityMod.new(self, nil)
    end
    return self._connection_management_allowed_origin
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Custom():list() / client:Custom():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:Custom(data)
  local EntityMod = require("entity.custom_entity")
  if data == nil then
    if self._custom == nil then
      self._custom = EntityMod.new(self, nil)
    end
    return self._custom
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DataStatus():list() / client:DataStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:DataStatus(data)
  local EntityMod = require("entity.data_status_entity")
  if data == nil then
    if self._data_status == nil then
      self._data_status = EntityMod.new(self, nil)
    end
    return self._data_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DataType():list() / client:DataType():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:DataType(data)
  local EntityMod = require("entity.data_type_entity")
  if data == nil then
    if self._data_type == nil then
      self._data_type = EntityMod.new(self, nil)
    end
    return self._data_type
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:History():list() / client:History():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:History(data)
  local EntityMod = require("entity.history_entity")
  if data == nil then
    if self._history == nil then
      self._history = EntityMod.new(self, nil)
    end
    return self._history
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Integration():list() / client:Integration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:Integration(data)
  local EntityMod = require("entity.integration_entity")
  if data == nil then
    if self._integration == nil then
      self._integration = EntityMod.new(self, nil)
    end
    return self._integration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Option():list() / client:Option():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:Option(data)
  local EntityMod = require("entity.option_entity")
  if data == nil then
    if self._option == nil then
      self._option = EntityMod.new(self, nil)
    end
    return self._option
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Product():list() / client:Product():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:Product(data)
  local EntityMod = require("entity.product_entity")
  if data == nil then
    if self._product == nil then
      self._product = EntityMod.new(self, nil)
    end
    return self._product
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Profile():list() / client:Profile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:Profile(data)
  local EntityMod = require("entity.profile_entity")
  if data == nil then
    if self._profile == nil then
      self._profile = EntityMod.new(self, nil)
    end
    return self._profile
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PullOperation():list() / client:PullOperation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:PullOperation(data)
  local EntityMod = require("entity.pull_operation_entity")
  if data == nil then
    if self._pull_operation == nil then
      self._pull_operation = EntityMod.new(self, nil)
    end
    return self._pull_operation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Push():list() / client:Push():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:Push(data)
  local EntityMod = require("entity.push_entity")
  if data == nil then
    if self._push == nil then
      self._push = EntityMod.new(self, nil)
    end
    return self._push
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PushOption():list() / client:PushOption():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:PushOption(data)
  local EntityMod = require("entity.push_option_entity")
  if data == nil then
    if self._push_option == nil then
      self._push_option = EntityMod.new(self, nil)
    end
    return self._push_option
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Queue():list() / client:Queue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:Queue(data)
  local EntityMod = require("entity.queue_entity")
  if data == nil then
    if self._queue == nil then
      self._queue = EntityMod.new(self, nil)
    end
    return self._queue
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RefreshData():list() / client:RefreshData():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:RefreshData(data)
  local EntityMod = require("entity.refresh_data_entity")
  if data == nil then
    if self._refresh_data == nil then
      self._refresh_data = EntityMod.new(self, nil)
    end
    return self._refresh_data
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Setting():list() / client:Setting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:Setting(data)
  local EntityMod = require("entity.setting_entity")
  if data == nil then
    if self._setting == nil then
      self._setting = EntityMod.new(self, nil)
    end
    return self._setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SupplementalData():list() / client:SupplementalData():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:SupplementalData(data)
  local EntityMod = require("entity.supplemental_data_entity")
  if data == nil then
    if self._supplemental_data == nil then
      self._supplemental_data = EntityMod.new(self, nil)
    end
    return self._supplemental_data
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SupplementalDataConfig():list() / client:SupplementalDataConfig():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:SupplementalDataConfig(data)
  local EntityMod = require("entity.supplemental_data_config_entity")
  if data == nil then
    if self._supplemental_data_config == nil then
      self._supplemental_data_config = EntityMod.new(self, nil)
    end
    return self._supplemental_data_config
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Sync():list() / client:Sync():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:Sync(data)
  local EntityMod = require("entity.sync_entity")
  if data == nil then
    if self._sync == nil then
      self._sync = EntityMod.new(self, nil)
    end
    return self._sync
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SyncSetting():list() / client:SyncSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:SyncSetting(data)
  local EntityMod = require("entity.sync_setting_entity")
  if data == nil then
    if self._sync_setting == nil then
      self._sync_setting = EntityMod.new(self, nil)
    end
    return self._sync_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Validation():list() / client:Validation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:Validation(data)
  local EntityMod = require("entity.validation_entity")
  if data == nil then
    if self._validation == nil then
      self._validation = EntityMod.new(self, nil)
    end
    return self._validation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Webhook():list() / client:Webhook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:Webhook(data)
  local EntityMod = require("entity.webhook_entity")
  if data == nil then
    if self._webhook == nil then
      self._webhook = EntityMod.new(self, nil)
    end
    return self._webhook
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WebhookZapierKey():list() / client:WebhookZapierKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CodatplatformSDK:WebhookZapierKey(data)
  local EntityMod = require("entity.webhook_zapier_key_entity")
  if data == nil then
    if self._webhook_zapier_key == nil then
      self._webhook_zapier_key = EntityMod.new(self, nil)
    end
    return self._webhook_zapier_key
  end
  return EntityMod.new(self, data)
end




function CodatplatformSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = CodatplatformSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return CodatplatformSDK
