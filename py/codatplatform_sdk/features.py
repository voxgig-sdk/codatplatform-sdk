# Codatplatform SDK feature factory

from codatplatform_sdk.feature.base_feature import CodatplatformBaseFeature
from codatplatform_sdk.feature.test_feature import CodatplatformTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CodatplatformBaseFeature(),
        "test": lambda: CodatplatformTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
