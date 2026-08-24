<?php
declare(strict_types=1);

// Codatplatform SDK base feature

class CodatplatformBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CodatplatformContext $ctx, array $options): void {}
    public function PostConstruct(CodatplatformContext $ctx): void {}
    public function PostConstructEntity(CodatplatformContext $ctx): void {}
    public function SetData(CodatplatformContext $ctx): void {}
    public function GetData(CodatplatformContext $ctx): void {}
    public function GetMatch(CodatplatformContext $ctx): void {}
    public function SetMatch(CodatplatformContext $ctx): void {}
    public function PrePoint(CodatplatformContext $ctx): void {}
    public function PreSpec(CodatplatformContext $ctx): void {}
    public function PreRequest(CodatplatformContext $ctx): void {}
    public function PreResponse(CodatplatformContext $ctx): void {}
    public function PreResult(CodatplatformContext $ctx): void {}
    public function PreDone(CodatplatformContext $ctx): void {}
    public function PreUnexpected(CodatplatformContext $ctx): void {}
}
