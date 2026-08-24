# Codatplatform SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CodatplatformUtility.registrar = ->(u) {
  u.clean = CodatplatformUtilities::Clean
  u.done = CodatplatformUtilities::Done
  u.make_error = CodatplatformUtilities::MakeError
  u.feature_add = CodatplatformUtilities::FeatureAdd
  u.feature_hook = CodatplatformUtilities::FeatureHook
  u.feature_init = CodatplatformUtilities::FeatureInit
  u.fetcher = CodatplatformUtilities::Fetcher
  u.make_fetch_def = CodatplatformUtilities::MakeFetchDef
  u.make_context = CodatplatformUtilities::MakeContext
  u.make_options = CodatplatformUtilities::MakeOptions
  u.make_request = CodatplatformUtilities::MakeRequest
  u.make_response = CodatplatformUtilities::MakeResponse
  u.make_result = CodatplatformUtilities::MakeResult
  u.make_point = CodatplatformUtilities::MakePoint
  u.make_spec = CodatplatformUtilities::MakeSpec
  u.make_url = CodatplatformUtilities::MakeUrl
  u.param = CodatplatformUtilities::Param
  u.prepare_auth = CodatplatformUtilities::PrepareAuth
  u.prepare_body = CodatplatformUtilities::PrepareBody
  u.prepare_headers = CodatplatformUtilities::PrepareHeaders
  u.prepare_method = CodatplatformUtilities::PrepareMethod
  u.prepare_params = CodatplatformUtilities::PrepareParams
  u.prepare_path = CodatplatformUtilities::PreparePath
  u.prepare_query = CodatplatformUtilities::PrepareQuery
  u.graphql_body = CodatplatformUtilities::GraphqlBody
  u.graphql_errors = CodatplatformUtilities::GraphqlErrors
  u.result_basic = CodatplatformUtilities::ResultBasic
  u.result_body = CodatplatformUtilities::ResultBody
  u.result_headers = CodatplatformUtilities::ResultHeaders
  u.transform_request = CodatplatformUtilities::TransformRequest
  u.transform_response = CodatplatformUtilities::TransformResponse
}
