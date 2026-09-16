# Codatplatform SDK feature factory

from codatplatform_sdk.feature.base_feature import CodatplatformBaseFeature
from codatplatform_sdk.feature.debug_feature import CodatplatformDebugFeature
from codatplatform_sdk.feature.idempotency_feature import CodatplatformIdempotencyFeature
from codatplatform_sdk.feature.metrics_feature import CodatplatformMetricsFeature
from codatplatform_sdk.feature.paging_feature import CodatplatformPagingFeature
from codatplatform_sdk.feature.ratelimit_feature import CodatplatformRatelimitFeature
from codatplatform_sdk.feature.retry_feature import CodatplatformRetryFeature
from codatplatform_sdk.feature.test_feature import CodatplatformTestFeature
from codatplatform_sdk.feature.timeout_feature import CodatplatformTimeoutFeature


_FEATURES = {
    "base": lambda: CodatplatformBaseFeature(),
    "debug": lambda: CodatplatformDebugFeature(),
    "idempotency": lambda: CodatplatformIdempotencyFeature(),
    "metrics": lambda: CodatplatformMetricsFeature(),
    "paging": lambda: CodatplatformPagingFeature(),
    "ratelimit": lambda: CodatplatformRatelimitFeature(),
    "retry": lambda: CodatplatformRetryFeature(),
    "test": lambda: CodatplatformTestFeature(),
    "timeout": lambda: CodatplatformTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
