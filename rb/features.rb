# Codatplatform SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/debug_feature'
require_relative 'feature/idempotency_feature'
require_relative 'feature/metrics_feature'
require_relative 'feature/paging_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module CodatplatformFeatures
  def self.make_feature(name)
    case name
    when "base"
      CodatplatformBaseFeature.new
    when "debug"
      CodatplatformDebugFeature.new
    when "idempotency"
      CodatplatformIdempotencyFeature.new
    when "metrics"
      CodatplatformMetricsFeature.new
    when "paging"
      CodatplatformPagingFeature.new
    when "ratelimit"
      CodatplatformRatelimitFeature.new
    when "retry"
      CodatplatformRetryFeature.new
    when "test"
      CodatplatformTestFeature.new
    when "timeout"
      CodatplatformTimeoutFeature.new
    else
      CodatplatformBaseFeature.new
    end
  end
end
