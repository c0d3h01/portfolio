interface ImportMetaEnv {
  readonly DB_PASSWORD: string;
  readonly ASTRO_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
