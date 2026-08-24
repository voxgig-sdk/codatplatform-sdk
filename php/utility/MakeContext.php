<?php
declare(strict_types=1);

// Codatplatform SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CodatplatformMakeContext
{
    public static function call(array $ctxmap, ?CodatplatformContext $basectx): CodatplatformContext
    {
        return new CodatplatformContext($ctxmap, $basectx);
    }
}
