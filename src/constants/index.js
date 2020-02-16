export const DEFAULT_META_TITLE = 'App Name';
export const DEFAULT_META_DESCRIPTION = 'App Description'
export const DEFAULT_META_IMAGE ='/';
export const BASE_API =
  process.env.NODE_ENV === 'production'
    ? `https://api.myapi.com/api/`
    : 'http://localhost:2000/api/';

export const DEFAULT_APP_NAME = 'MyApp'