import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth';
import { Profiles } from '../../utils/enums';
import config from '../../utils/config';

interface ITenantIdsListItem {
  COMPANYID: string;
}

interface ITenantIdsAPIResponse {
  statusCode: number;
  results?: ITenantIdsListItem[];
  message?: string;
  error?: string;
}

export interface IFetchTenantsHook {
  data?: string[];
  error?: string;
  loading: boolean;
}

const useFetchTenants = (): IFetchTenantsHook => {
  const { API_BASEURL, LOGS_ENDPOINT, COMPANYIDS_ENDPOINT } = config;
  const { state } = useContext(AuthContext);
  const [data, setData] = useState<string[]>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    if (state.profile === Profiles.OP_VTAL) {
      const headers = new Headers();
      headers.append('pcw', state.profile);
      headers.append('name', state.userName);
      headers.append('email', state.email);

      fetch(API_BASEURL + LOGS_ENDPOINT + COMPANYIDS_ENDPOINT, {
        headers,
      })
        .then((res) => res.json())
        .then((data: ITenantIdsAPIResponse) => {
          const { statusCode, message, results } = data;

          if (statusCode !== 200) {
            setError(() => message);
          } else {
            const rawTenantsList: string[] = [];

            if (results !== undefined) {
              results.forEach((element) => {
                rawTenantsList.push(element.COMPANYID);
              });

              const filteredList = rawTenantsList.filter((element, index) => {
                return rawTenantsList.indexOf(element) === index;
              });

              setData(() => filteredList);
            }
          }
        })
        .catch((error) => {
          setError(() => error);
        })
        .finally(() => setLoading(() => false));
    }
  }, [state.profile, state.userName, state.email, API_BASEURL, LOGS_ENDPOINT]);

  return { data, error, loading };
};

export default useFetchTenants;
