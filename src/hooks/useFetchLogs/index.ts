import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth';
import config from '../../utils/config';
import { Profiles, QueryFileStatus } from '../../utils/enums';

export interface IApiResponse {
  data?: IResponseData;
  error?: string;
  loading: boolean;
}

interface IResponseItem {
  arquivo_enviado: string;
  arquivo_renomeado: string;
  data_envio: string;
  tamanho: number;
  qnt_onts: number;
  responsavel_envio: string;
  status_envio: string;
  companyid?: string;
}

interface IResponseData {
  statusCode: number; //TODO: should come from an enum like "HTTP_STATUS_CODE"
  totalElements: number;
  page: number;
  totalPages: number;
  results: IResponseItem[];
  error: string;
  message: string[];
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
    headers.append('companyId', state.organization);
    headers.append('name', state.userName);
    headers.append('email', state.email);

    fetch(API_BASEURL + LOGS_ENDPOINT + `?${query.toString()}`, {
      headers,
    })
      .then((res) => {
        return res.json();
      })
      .then((data: IResponseData) => {
        if (data.statusCode === 200) {
          setData(data);
          setLoading(false);
        } else {
          setError(data.message[0]);
        }
      })
      .catch((error: string) => {
        setError(error);
      });
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
