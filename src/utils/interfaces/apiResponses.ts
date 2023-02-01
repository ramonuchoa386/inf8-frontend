import { Profiles } from '../enums';

interface IResponseItem {
  ARQUIVO_ENVIADO: string;
  ARQUIVO_RENOMEADO: string;
  DATA_ENVIO: string;
  QNT_ONTS: number;
  RESPONSAVEL_ENVIO: string;
  STATUS_ENVIO: string;
  TAMANHO: number;
  COMPANYID: string;
  STATUS_ENVIO_DETALHE: string | null;
}

export interface IResponseData {
  statusCode: number; //TODO: should come from an enum like "HTTP_STATUS_CODE"
  totalElements: number;
  page: number;
  totalPages: number;
  results: IResponseItem[];
  error: string;
  message: string | string[];
}

export interface IKeepAliveResponse {
  access_token: string;
  sub: string;
  refresh_token: string;
  expires: number;
  pcw: Profiles;
  organization: string;
  name: string;
  claims: any[];
  email: string;
  client_id: string;
  status: string;
}
