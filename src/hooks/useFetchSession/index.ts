import React, { useState, useEffect } from 'react';
import config from '../../utils/config';

const useFetchSession = () => {
  const { PROXY_URL, KEEP_ALIVE_PROXY_URL } = config;
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    fetch(PROXY_URL + KEEP_ALIVE_PROXY_URL, {
      credentials: 'include',
    })
      .then((res) => {
        console.log('raw proxy response: ', res);

        return res.json();
      })
      .then((data) => {
        console.log('proxy response: ', data);
      })
      .catch((error) => {
        console.error('proxy error response: ', error);
      })
      .finally(() => setLoading(() => false));
  }, [PROXY_URL, KEEP_ALIVE_PROXY_URL]);

  return { loading };
};

export default useFetchSession;
