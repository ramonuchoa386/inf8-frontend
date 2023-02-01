import React, { useState, useEffect } from 'react';
import { MOCK_OP_VTAL } from '../../context/auth/auth.mock';
import config from '../../utils/config';
import { IKeepAliveResponse } from '../../utils/interfaces';

const useFetchSession = () => {
  const { PROXY_URL, KEEP_ALIVE_PROXY_URL } = config;
  const [loading, setLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<IKeepAliveResponse>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);

    fetch(PROXY_URL + KEEP_ALIVE_PROXY_URL, {
      redirect: 'manual',
      credentials: 'same-origin',
    })
      .then((data) => {
        if (!data.ok) {
          console.log('not ok, redirecting...');

          // window.location.href = data.url;
          return data;
        } else {
          return data.json();
        }
      })
      .then((data: IKeepAliveResponse) => {
        console.log('formated res: ', data);

        setUserInfo(() => MOCK_OP_VTAL);
      })
      .catch((error) => {
        console.error('proxy error response: ', error);

        setError(() => error);
      })
      .finally(() => setLoading(() => false));
  }, [PROXY_URL, KEEP_ALIVE_PROXY_URL]);

  return { loading, userInfo, error };
};

export default useFetchSession;
