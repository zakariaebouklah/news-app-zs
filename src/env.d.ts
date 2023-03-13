declare namespace NodeJS {
  /** Merge declaration with `process` in order to override the global-scoped env. */
  export interface ProcessEnv {
    /**
     * Built-in environment variable.
     * @see Docs https://github.com/chihab/ngx-env#ng_app_env.
     */
    // readonly NG_APP_ENV: string;
    readonly NG_APP_API_KEY : string;
    readonly NG_APP_DOMAIN: string;
    readonly NG_APP_PROJECT_ID: string;
    readonly NG_APP_BUCKET_ID: string;
    readonly NG_APP_MESSAGING_ID: string;
    readonly NG_APP_APP_ID: string;
    readonly NG_APP_NEWS_KEY: string;

    // Add your environment variables below
  }
}
