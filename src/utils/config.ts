// const API_EXTERNAL_HOST = (): string => {
//   switch (process.env.NODE_ENV) {
//     case 'test':
//       return 'https://novoportaloperacional-ti.vtal.com.br/';
//     case 'production':
//       return 'https://novoportaloperacional-ti.vtal.com.br/';
//     default:
//       return 'https://inf8-chinesewall-portaloperacional-hml.apps.ocpcorp.vtal.intra/api';
//   }
// };

const config = {
  API_BASEURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api'
      : process.env.REACT_APP_API_BASEURL,
  FILEUPLOAD_ENDPOINT: '/file-upload',
  LOGS_ENDPOINT: '/logs',
  COMPANYIDS_ENDPOINT: '/listcompanyid',
  MAX_FILE_SIZE: 5000000,
  PROXY_URL: 'https://novoportaloperacional-ti.vtal.com.br',
  API_PROXY_URL: '/api-inf8',
  KEEP_ALIVE_PROXY_URL: '/keep-alive',
};

export default config;
