import React, { useState, useEffect } from 'react';
import config from '../../utils/config';
import { IKeepAliveResponse } from '../../utils/interfaces';

const useFetchSession = () => {
  const { KEEP_ALIVE_PROXY_URL } = config;
  const [loading, setLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<IKeepAliveResponse>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);

    fetch(KEEP_ALIVE_PROXY_URL, {
      credentials: 'same-origin',
    })
      .then((res) => res.json())
      .then((data: IKeepAliveResponse) => {
        setUserInfo(() => data);
      })
      .catch((error) => {
        setError(() => error);
      })
      .finally(() => setLoading(() => false));
  }, [KEEP_ALIVE_PROXY_URL]);

  return { loading, userInfo, error };
};

export default useFetchSession;
