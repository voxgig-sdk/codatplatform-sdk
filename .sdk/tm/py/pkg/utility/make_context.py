# Codatplatform SDK utility: make_context

from projectname_sdk.core.context import CodatplatformContext


def make_context_util(ctxmap, basectx):
    return CodatplatformContext(ctxmap, basectx)
