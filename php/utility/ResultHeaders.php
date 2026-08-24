<?php
declare(strict_types=1);

// Codatplatform SDK utility: result_headers

class CodatplatformResultHeaders
{
    public static function call(CodatplatformContext $ctx): ?CodatplatformResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
