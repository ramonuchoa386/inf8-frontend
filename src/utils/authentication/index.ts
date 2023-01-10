import config from '../config';

interface ISignIn {
  user: string;
  pass: string;
}

async function authentication(data: ISignIn) {
  const { user, pass } = data;
  const authEndpoint = config.PAPI_BASEURL + config.PAPI_USER_AUTH;
  const userInfo: { authenticated: boolean } = {
    authenticated: false,
  };
  let status = false;

  await fetch(authEndpoint, {
    method: 'POST',
    credentials: 'include',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Origin-Hub-Name': config.ORIGIN_HUB_NAME,
    }),
    body: JSON.stringify({
      username: `${user}`,
      password: `${pass}`,
      eula: 'accept',
      provider: null,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then(() => {
      status = true;
      userInfo.authenticated = true;
    })
    .catch((reason) => console.error(reason));

  return { status, userInfo };
}

async function getSessionID() {
  const url = config.PAPI_BASEURL + config.PAPI_USER_SESSIONID;

  await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: '*/*',
      'Origin-Hub-Name': config.ORIGIN_HUB_NAME,
    }),
  }).then((res) => {
    return res.json();
  });
}

export default { authentication, getSessionID };
