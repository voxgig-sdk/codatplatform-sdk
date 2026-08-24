# ProjectName SDK exists test

import pytest
from codatplatform_sdk import CodatplatformSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CodatplatformSDK.test(None, None)
        assert testsdk is not None
