const config = {
  API_BASEURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api'
      : process.env.REACT_APP_API_BASEURL,
  API_CONTEXT: '/api',
  FILEUPLOAD_ENDPOINT: '/file-upload',
  LOGS_ENDPOINT: '/logs',
  COMPANYIDS_ENDPOINT: '/listcompanyid',
  KEEP_ALIVE_PROXY_URL: '/keep-alive',
  END_SESSION_PROXY_URL: '/end-session',
  MAX_FILE_SIZE: 5000000,
};

export default config;
