# Codatplatform SDK

from codatplatform_sdk.utility.voxgig_struct import voxgig_struct as vs
from codatplatform_sdk.core.utility_type import CodatplatformUtility
from codatplatform_sdk.core.spec import CodatplatformSpec
from codatplatform_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from codatplatform_sdk.utility import register

# Load features
from codatplatform_sdk.feature.base_feature import CodatplatformBaseFeature
from codatplatform_sdk.features import _make_feature


class CodatplatformSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = CodatplatformUtility()
        self._utility = utility

        from codatplatform_sdk.config import make_config
        config = make_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        extend = vs.getprop(self.options, "extend")
        if isinstance(extend, list):
            for f in extend:
                if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                    utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return CodatplatformUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = CodatplatformSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "CodatplatformSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("CodatplatformSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def AccessToken(self, data=None) -> "AccessTokenEntity":
        """Entity factory: client.AccessToken().list() / client.AccessToken().load({"id": ...})."""
        from codatplatform_sdk.entity.access_token_entity import AccessTokenEntity
        return AccessTokenEntity(self, data)


    def All(self, data=None) -> "AllEntity":
        """Entity factory: client.All().list() / client.All().load({"id": ...})."""
        from codatplatform_sdk.entity.all_entity import AllEntity
        return AllEntity(self, data)


    def ApiKey(self, data=None) -> "ApiKeyEntity":
        """Entity factory: client.ApiKey().list() / client.ApiKey().load({"id": ...})."""
        from codatplatform_sdk.entity.api_key_entity import ApiKeyEntity
        return ApiKeyEntity(self, data)


    def Branding(self, data=None) -> "BrandingEntity":
        """Entity factory: client.Branding().list() / client.Branding().load({"id": ...})."""
        from codatplatform_sdk.entity.branding_entity import BrandingEntity
        return BrandingEntity(self, data)


    def Company(self, data=None) -> "CompanyEntity":
        """Entity factory: client.Company().list() / client.Company().load({"id": ...})."""
        from codatplatform_sdk.entity.company_entity import CompanyEntity
        return CompanyEntity(self, data)


    def CompanyAccessToken(self, data=None) -> "CompanyAccessTokenEntity":
        """Entity factory: client.CompanyAccessToken().list() / client.CompanyAccessToken().load({"id": ...})."""
        from codatplatform_sdk.entity.company_access_token_entity import CompanyAccessTokenEntity
        return CompanyAccessTokenEntity(self, data)


    def Connection(self, data=None) -> "ConnectionEntity":
        """Entity factory: client.Connection().list() / client.Connection().load({"id": ...})."""
        from codatplatform_sdk.entity.connection_entity import ConnectionEntity
        return ConnectionEntity(self, data)


    def ConnectionManagementAccessToken(self, data=None) -> "ConnectionManagementAccessTokenEntity":
        """Entity factory: client.ConnectionManagementAccessToken().list() / client.ConnectionManagementAccessToken().load({"id": ...})."""
        from codatplatform_sdk.entity.connection_management_access_token_entity import ConnectionManagementAccessTokenEntity
        return ConnectionManagementAccessTokenEntity(self, data)


    def ConnectionManagementAllowedOrigin(self, data=None) -> "ConnectionManagementAllowedOriginEntity":
        """Entity factory: client.ConnectionManagementAllowedOrigin().list() / client.ConnectionManagementAllowedOrigin().load({"id": ...})."""
        from codatplatform_sdk.entity.connection_management_allowed_origin_entity import ConnectionManagementAllowedOriginEntity
        return ConnectionManagementAllowedOriginEntity(self, data)


    def Custom(self, data=None) -> "CustomEntity":
        """Entity factory: client.Custom().list() / client.Custom().load({"id": ...})."""
        from codatplatform_sdk.entity.custom_entity import CustomEntity
        return CustomEntity(self, data)


    def DataStatus(self, data=None) -> "DataStatusEntity":
        """Entity factory: client.DataStatus().list() / client.DataStatus().load({"id": ...})."""
        from codatplatform_sdk.entity.data_status_entity import DataStatusEntity
        return DataStatusEntity(self, data)


    def DataType(self, data=None) -> "DataTypeEntity":
        """Entity factory: client.DataType().list() / client.DataType().load({"id": ...})."""
        from codatplatform_sdk.entity.data_type_entity import DataTypeEntity
        return DataTypeEntity(self, data)


    def History(self, data=None) -> "HistoryEntity":
        """Entity factory: client.History().list() / client.History().load({"id": ...})."""
        from codatplatform_sdk.entity.history_entity import HistoryEntity
        return HistoryEntity(self, data)


    def Integration(self, data=None) -> "IntegrationEntity":
        """Entity factory: client.Integration().list() / client.Integration().load({"id": ...})."""
        from codatplatform_sdk.entity.integration_entity import IntegrationEntity
        return IntegrationEntity(self, data)


    def Option(self, data=None) -> "OptionEntity":
        """Entity factory: client.Option().list() / client.Option().load({"id": ...})."""
        from codatplatform_sdk.entity.option_entity import OptionEntity
        return OptionEntity(self, data)


    def Product(self, data=None) -> "ProductEntity":
        """Entity factory: client.Product().list() / client.Product().load({"id": ...})."""
        from codatplatform_sdk.entity.product_entity import ProductEntity
        return ProductEntity(self, data)


    def Profile(self, data=None) -> "ProfileEntity":
        """Entity factory: client.Profile().list() / client.Profile().load({"id": ...})."""
        from codatplatform_sdk.entity.profile_entity import ProfileEntity
        return ProfileEntity(self, data)


    def PullOperation(self, data=None) -> "PullOperationEntity":
        """Entity factory: client.PullOperation().list() / client.PullOperation().load({"id": ...})."""
        from codatplatform_sdk.entity.pull_operation_entity import PullOperationEntity
        return PullOperationEntity(self, data)


    def Push(self, data=None) -> "PushEntity":
        """Entity factory: client.Push().list() / client.Push().load({"id": ...})."""
        from codatplatform_sdk.entity.push_entity import PushEntity
        return PushEntity(self, data)


    def PushOption(self, data=None) -> "PushOptionEntity":
        """Entity factory: client.PushOption().list() / client.PushOption().load({"id": ...})."""
        from codatplatform_sdk.entity.push_option_entity import PushOptionEntity
        return PushOptionEntity(self, data)


    def Queue(self, data=None) -> "QueueEntity":
        """Entity factory: client.Queue().list() / client.Queue().load({"id": ...})."""
        from codatplatform_sdk.entity.queue_entity import QueueEntity
        return QueueEntity(self, data)


    def RefreshData(self, data=None) -> "RefreshDataEntity":
        """Entity factory: client.RefreshData().list() / client.RefreshData().load({"id": ...})."""
        from codatplatform_sdk.entity.refresh_data_entity import RefreshDataEntity
        return RefreshDataEntity(self, data)


    def Setting(self, data=None) -> "SettingEntity":
        """Entity factory: client.Setting().list() / client.Setting().load({"id": ...})."""
        from codatplatform_sdk.entity.setting_entity import SettingEntity
        return SettingEntity(self, data)


    def SupplementalData(self, data=None) -> "SupplementalDataEntity":
        """Entity factory: client.SupplementalData().list() / client.SupplementalData().load({"id": ...})."""
        from codatplatform_sdk.entity.supplemental_data_entity import SupplementalDataEntity
        return SupplementalDataEntity(self, data)


    def SupplementalDataConfig(self, data=None) -> "SupplementalDataConfigEntity":
        """Entity factory: client.SupplementalDataConfig().list() / client.SupplementalDataConfig().load({"id": ...})."""
        from codatplatform_sdk.entity.supplemental_data_config_entity import SupplementalDataConfigEntity
        return SupplementalDataConfigEntity(self, data)


    def Sync(self, data=None) -> "SyncEntity":
        """Entity factory: client.Sync().list() / client.Sync().load({"id": ...})."""
        from codatplatform_sdk.entity.sync_entity import SyncEntity
        return SyncEntity(self, data)


    def SyncSetting(self, data=None) -> "SyncSettingEntity":
        """Entity factory: client.SyncSetting().list() / client.SyncSetting().load({"id": ...})."""
        from codatplatform_sdk.entity.sync_setting_entity import SyncSettingEntity
        return SyncSettingEntity(self, data)


    def Validation(self, data=None) -> "ValidationEntity":
        """Entity factory: client.Validation().list() / client.Validation().load({"id": ...})."""
        from codatplatform_sdk.entity.validation_entity import ValidationEntity
        return ValidationEntity(self, data)


    def Webhook(self, data=None) -> "WebhookEntity":
        """Entity factory: client.Webhook().list() / client.Webhook().load({"id": ...})."""
        from codatplatform_sdk.entity.webhook_entity import WebhookEntity
        return WebhookEntity(self, data)


    def WebhookZapierKey(self, data=None) -> "WebhookZapierKeyEntity":
        """Entity factory: client.WebhookZapierKey().list() / client.WebhookZapierKey().load({"id": ...})."""
        from codatplatform_sdk.entity.webhook_zapier_key_entity import WebhookZapierKeyEntity
        return WebhookZapierKeyEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "CodatplatformSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from codatplatform_sdk.entity.access_token_entity import AccessTokenEntity
    from codatplatform_sdk.entity.all_entity import AllEntity
    from codatplatform_sdk.entity.api_key_entity import ApiKeyEntity
    from codatplatform_sdk.entity.branding_entity import BrandingEntity
    from codatplatform_sdk.entity.company_entity import CompanyEntity
    from codatplatform_sdk.entity.company_access_token_entity import CompanyAccessTokenEntity
    from codatplatform_sdk.entity.connection_entity import ConnectionEntity
    from codatplatform_sdk.entity.connection_management_access_token_entity import ConnectionManagementAccessTokenEntity
    from codatplatform_sdk.entity.connection_management_allowed_origin_entity import ConnectionManagementAllowedOriginEntity
    from codatplatform_sdk.entity.custom_entity import CustomEntity
    from codatplatform_sdk.entity.data_status_entity import DataStatusEntity
    from codatplatform_sdk.entity.data_type_entity import DataTypeEntity
    from codatplatform_sdk.entity.history_entity import HistoryEntity
    from codatplatform_sdk.entity.integration_entity import IntegrationEntity
    from codatplatform_sdk.entity.option_entity import OptionEntity
    from codatplatform_sdk.entity.product_entity import ProductEntity
    from codatplatform_sdk.entity.profile_entity import ProfileEntity
    from codatplatform_sdk.entity.pull_operation_entity import PullOperationEntity
    from codatplatform_sdk.entity.push_entity import PushEntity
    from codatplatform_sdk.entity.push_option_entity import PushOptionEntity
    from codatplatform_sdk.entity.queue_entity import QueueEntity
    from codatplatform_sdk.entity.refresh_data_entity import RefreshDataEntity
    from codatplatform_sdk.entity.setting_entity import SettingEntity
    from codatplatform_sdk.entity.supplemental_data_entity import SupplementalDataEntity
    from codatplatform_sdk.entity.supplemental_data_config_entity import SupplementalDataConfigEntity
    from codatplatform_sdk.entity.sync_entity import SyncEntity
    from codatplatform_sdk.entity.sync_setting_entity import SyncSettingEntity
    from codatplatform_sdk.entity.validation_entity import ValidationEntity
    from codatplatform_sdk.entity.webhook_entity import WebhookEntity
    from codatplatform_sdk.entity.webhook_zapier_key_entity import WebhookZapierKeyEntity
