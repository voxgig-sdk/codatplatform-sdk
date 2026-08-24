<?php
declare(strict_types=1);

// Codatplatform SDK utility: prepare_path

class CodatplatformPreparePath
{
    public static function call(CodatplatformContext $ctx): string
    {
        $point = $ctx->point;
        $parts = [];
        if ($point) {
            $p = \Voxgig\Struct\Struct::getprop($point, 'parts');
            if (is_array($p)) {
                $parts = $p;
            }
        }
        return \Voxgig\Struct\Struct::join($parts, '/', true);
    }
}
