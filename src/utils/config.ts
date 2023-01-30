const config = {
  ORIGIN_HUB_NAME: 'apihub_developers_hml',
  PAPI_BASEURL:
    process.env.NODE_ENV === 'development'
      ? 'https://apim.dev.ca.com/api/apim'
      : 'https://developers.hml.vtal.intra/api/developers',
  API_BASEURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api'
      : 'https://inf8-chinesewall-portaloperacional-hml.apps.ocpcorp.vtal.intra/api',
  FILEUPLOAD_ENDPOINT: '/file-upload',
  LOGS_ENDPOINT: '/logs',
  MAX_FILE_SIZE: 5000000,
  // PAPI_BASEURL: process.env.REACT_APP_PAPI_HOST || 'https://apim.dev.ca.com/api/apim',
  PAPI_API_LIST: '/api-management/1.0/apis',
  PAPI_API_MANAGEMENT: '/api-management/1.0/apis/',
  PAPI_APIGROUP_LIST: '/api-management/1.0/api-groups',
  PAPI_APPLICATION_DETAIL: (resource: string) => {
    if (process.env.NODE_ENV === 'development') {
      return `/api-management/1.0/Applications('${resource}')`;
    }

    return `/Applications('${resource}')`;
  },
  PAPI_APPLICATION_LIST: '/api-management/1.0/applications',
  PAPI_APPLICATION_RELATED_APIS: '/api-management/1.0/Apis',
  PAPI_TAGS_LIST: '/tags',
  PAPI_USER_AUTH: '/authenticate/login',
  PAPI_USER_CONTEXTS: '/userContexts',
  PAPI_PORTAL_SCHEMA: '/public/auth/schemes',
  PAPI_USER_LOGOUT: '/logout',
  PAPI_USER_SESSIONID: '/cmsSettings',
  VTAL_GESTAOACESSO_BASEURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://gestao-de-acesso-backend-hml.hml.ocpcorp.vtal.intra/',
  VTAL_GESTAOACESSO_TROCADESENHA_ENDPOINT: '/api/users/password/change',
  NAM_URL:
    'https://developers.hml.vtal.intra/api/developers/authenticate/saml/request/566bd7ae-2bc8-4423-9cc9-23b579d24b0a',
};

export default config;
