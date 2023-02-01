import { Profiles } from '../enums';

export interface IResponseItem {
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

export interface IKeepAliveRefresh {
  claims: any[];
  email: string;
  name: string;
  organization: string;
  pcw: Profiles;
  status: string;
  sub: string;
}

export interface IKeepAliveResponse extends IKeepAliveRefresh {
  access_token?: string;
  client_id?: string;
  expires?: number;
  refresh_token?: string;
}

// interface IKeepAliveRefresh {
//   companyId: string;
//   companyName: string;
//   email_verified: boolean;
//   preferred_username: string;
//   role: string[];
//   sub: string;
//   tecnologia: string;
// }
