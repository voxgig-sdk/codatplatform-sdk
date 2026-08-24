<?php
declare(strict_types=1);

// Codatplatform SDK utility: prepare_body

class CodatplatformPrepareBody
{
    public static function call(CodatplatformContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
