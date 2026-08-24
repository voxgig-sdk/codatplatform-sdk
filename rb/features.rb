# Codatplatform SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CodatplatformFeatures
  def self.make_feature(name)
    case name
    when "base"
      CodatplatformBaseFeature.new
    when "test"
      CodatplatformTestFeature.new
    else
      CodatplatformBaseFeature.new
    end
  end
end
