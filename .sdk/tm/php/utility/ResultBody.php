<?php
declare(strict_types=1);

// Codatplatform SDK utility: result_body

class CodatplatformResultBody
{
    public static function call(CodatplatformContext $ctx): ?CodatplatformResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
