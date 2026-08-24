-- Codatplatform SDK error

local CodatplatformError = {}
CodatplatformError.__index = CodatplatformError


function CodatplatformError.new(code, msg, ctx)
  local self = setmetatable({}, CodatplatformError)
  self.is_sdk_error = true
  self.sdk = "Codatplatform"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CodatplatformError:error()
  return self.msg
end


function CodatplatformError:__tostring()
  return self.msg
end


return CodatplatformError
