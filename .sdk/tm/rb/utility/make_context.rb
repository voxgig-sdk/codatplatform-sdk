# Codatplatform SDK utility: make_context
require_relative '../core/context'
module CodatplatformUtilities
  MakeContext = ->(ctxmap, basectx) {
    CodatplatformContext.new(ctxmap, basectx)
  }
end
