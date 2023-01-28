import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth';
import { Profiles } from '../../utils/enums';
import config from '../../utils/config';
import { IResponseData } from '../../utils/interfaces';

export interface IFetchTenantsHook {
  data?: string[];
  error?: string;
  loading: boolean;
}

const useFetchTenants = (): IFetchTenantsHook => {
  const { API_BASEURL, LOGS_ENDPOINT } = config;
  const { state } = useContext(AuthContext);
  const [data, setData] = useState<string[]>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    if (state.profile === Profiles.OP_VTAL) {
      const query = new URLSearchParams({
        pageSize: '500',
        page: '0',
      });

      const headers = new Headers();
      headers.append('pcw', state.profile);
      headers.append('name', state.userName);
      headers.append('email', state.email);

      fetch(API_BASEURL + LOGS_ENDPOINT + `?${query.toString()}`, {
        headers,
      })
        .then((res) => res.json())
        .then((data: IResponseData) => {
          if (data.statusCode !== 200) {
            setError(() =>
              typeof data.message === 'string' ? data.message : data.message[0]
            );
          } else {
            const rawTenantsList: string[] = [];

            data.results.forEach((element) => {
              rawTenantsList.push(element.COMPANYID);
            });

            const filteredList = rawTenantsList.filter((element, index) => {
              return rawTenantsList.indexOf(element) === index;
            });

            setData(() => filteredList);
          }
        })
        .catch((error) => {
          setError(() => error);
        })
        .finally(() => setLoading(() => false));

      // const timer = setTimeout(() => {
      //   setData(() => ['oi', 'vero', 'claro', 'obvius', 'algar']);
      //   setError(undefined);
      //   setLoading(false);
      // }, 3000);

      // return () => clearTimeout(timer);
    }
  }, [state.profile, state.userName, state.email, API_BASEURL, LOGS_ENDPOINT]);

  return { data, error, loading };
};

export default useFetchTenants;
