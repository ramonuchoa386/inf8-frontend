import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth';
import config from '../../utils/config';
import { Profiles, QueryFileStatus } from '../../utils/enums';
import { IResponseData } from '../../utils/interfaces';

export interface IApiResponse {
  data?: IResponseData;
  error?: string;
  loading: boolean;
}

const useFetchLogs = (
  pageSize: number,
  page: number,
  fileStatus?: QueryFileStatus,
  searchTerm?: string,
  tenant?: string
): IApiResponse => {
  const { API_BASEURL, LOGS_ENDPOINT } = config;
  const { state } = useContext(AuthContext);
  const [data, setData] = useState<IResponseData>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const query = new URLSearchParams({
      pageSize: pageSize.toString(),
      page: page.toString(),
    });

    if (fileStatus !== undefined) {
      query.append('status', fileStatus);
    }

    if (searchTerm !== undefined) {
      query.append('search', searchTerm);
    }

    if (
      tenant !== undefined &&
      (state.profile === Profiles.OP_VTAL || state.profile === Profiles.VW_VTAL)
    ) {
      query.append('companyid', tenant);
    }

    const headers = new Headers();
    headers.append('pcw', state.profile);
    headers.append('name', state.userName);
    headers.append('email', state.email);

    if (state.organization !== undefined) {
      headers.append('companyid', state.organization);
    }

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
          setData(() => data);
        }
      })
      .catch((error: string) => {
        setError(error);
      })
      .finally(() => setLoading(() => false));
  }, [
    pageSize,
    page,
    API_BASEURL,
    LOGS_ENDPOINT,
    fileStatus,
    searchTerm,
    tenant,
    state.profile,
    state.organization,
    state.userName,
    state.email,
  ]);

  return { data, error, loading };
};

export default useFetchLogs;
