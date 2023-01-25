import React, { useState, useEffect } from 'react';
import config from '../../utils/config';
import { QueryFileStatus } from '../../utils/enums';

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
  searchTerm?: string
): IApiResponse => {
  const { API_BASEURL, LOGS_ENDPOINT } = config;
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

    fetch(API_BASEURL + LOGS_ENDPOINT + `?${query.toString()}`)
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
  }, [pageSize, page, API_BASEURL, LOGS_ENDPOINT, fileStatus, searchTerm]);

  return { data, error, loading };
};

export default useFetchLogs;
