import { StatusType } from '../types';

interface IBaseRes {
  _id: string;
  accessStatus: string;
  applicationUsage: number;
  createTs: number;
  description: string;
  id: string;
  modifyTs: number;
  name: string;
  portalStatus: StatusType;
  tags: string[];
  uuid: string;
  version: string;
}

export interface IAPIListResponse extends IBaseRes {
  ssgServiceType: string;
}

export interface IGroupIncludedAPIs extends IBaseRes {
  apiEulaUuid: string;
  apiServiceType: string;
}

export interface IResponseDetails extends IAPIListResponse {
  apiEulaUuid: string;
}

export interface IResponseBody {
  results: IResponseDetails[];
  totalElements: number;
}

export interface IRelatedAPKs {
  _id: string;
  apiKey: string;
  applicationUuid: string;
  createTs: number;
  defaultKey: boolean;
  id: string;
  keySecret: string;
  keySecretHashed: boolean;
  modifyTs: number;
  name: string;
  oauthCallbackUrl: string;
  oauthScope: string;
  oauthType: string;
  status: StatusType;
  uuid: string;
}

export interface IAPIGroupAPIItem {
  uuid: string;
  name: string;
  status: StatusType;
}

export interface IAPIGroupRes {
  id: string;
  uuid: string;
  orgUuid: string;
  name: string;
  description: string;
  apiGroupEulaUuid: string;
  apis: IAPIGroupAPIItem[];
  _id: string;
}

export interface IApplicationDetail {
  id: string;
  uuid: string;
  name: string;
  status: StatusType;
  description: string;
  disabledByType: any;
  OauthCallbackUrl: string;
  OauthScope: string;
  OauthType: string;
  apiKey: string;
  keySecret: string;
  apiIds: {
    results: string[];
  };
  _accessibleApis: string[];
  _id: string;
  Id: string;
  Uuid: string;
  Name: string;
  Status: StatusType;
  DisabledByType: any;
  Description: string;
  ApiKey: string;
  KeySecret: string;
  ApiIds: {
    results: string[];
  };
}

interface IApiApiPlanIds {
  ApiUuid: string;
  ApiPlanUuid: string;
}

interface ICustomFieldValues {
  Uuid: string;
  EntityUuid: string;
  CustomFieldUuid: string;
  Value: string;
}

export interface IApplicationDetailProd {
  ApiApiPlanIds: { results: IApiApiPlanIds[] };
  ApiGroupIds: { results: string[] };
  ApiIds: { results: string[] };
  ApiKey: string;
  CustomFieldValues: { results: ICustomFieldValues[] };
  Description: string;
  KeySecret: string;
  MagMasterKey: string;
  MagScope: string;
  Name: string;
  OauthCallbackUrl: string;
  OauthScope: string;
  OauthType: string;
  OrganizationUuid: string;
  OrganizationName: string;
  Status: StatusType;
  Uuid: string;
}

export interface IApplicationDetailProdRes extends IApplicationDetailProd {
  __metadata: { uri: string };
  DisabledByType: null;
  Reason: null;
  ShouldHash: null;
}

export interface IAPIGroupProdRes {
  uuid: string;
  name: string;
  status: StatusType;
  description: string;
}

interface IPolicyTemplateArguments {
  name: string;
  value: string;
}

interface IPolicyEntities {
  policyEntityUuid: string;
  policyTemplateArguments: IPolicyTemplateArguments[];
}

interface IHref {
  href: string;
}

interface ILinks {
  self?: IHref;
  apiUsage?: IHref;
  policyEntities?: IHref;
  customFields?: IHref;
  assets?: IHref;
  tags?: IHref;
  nextPage?: IHref;
  lastPage?: IHref;
}
export interface IAPIDetailProsRes {
  _links: ILinks;
  accessStatus: string;
  apiEulaUuid: string;
  apiServiceType: string;
  authenticationParameters: string;
  authenticationType: string;
  createTs: number;
  customFieldValues: any[];
  description: string;
  locationUrl: string;
  managingOrgUuid: null;
  modifyTs: number;
  name: string;
  policyEntities: IPolicyEntities[];
  portalStatus: StatusType;
  possibleStatuses: string[];
  privateDescription: string;
  publishedByPortal: true;
  restricted: null;
  specFilename: null;
  specFilesize: null;
  ssgUrl: string;
  type: string;
  uuid: string;
  version: string;
}

export interface IAPIListItemProdRes {
  uuid: string;
  name: string;
  description: string;
  type: string;
  portalStatus: StatusType;
  accessStatus: string;
  ssgUrl: string;
  specFilename: null;
  version: string;
  apiEulaUuid: string;
  createTs: number;
  modifyTs: number;
  ssgServiceType: 'REST' | 'SOAP';
  applicationUsage: number;
  tags: string[];
  publishedByPortal: boolean;
}

export interface IListAPIProdRes {
  totalPages: number;
  pageSize: number;
  currentPage: number;
  totalElements: number;
  results: IAPIListItemProdRes[];
  _links: ILinks;
}

export interface ILoginProdRes {
  respCode: '200' | '14002';
  respMsg: string;
  provider: string;
  referrer: string;
}

export interface ILoginSuccess extends ILoginProdRes {
  dashboardPath: string;
}

export interface ILoginError extends ILoginProdRes {
  errorCode: string;
}

interface IAdvancedSchemaConfig {
  enhancedPasswordSecurity: string;
}

interface IAuthSchema {
  uuid: string;
  name: string;
  description: string;
  showFyp: boolean;
  credsReqd: boolean;
  defaultConfig: true;
  url: string;
  tenantId: string;
  authMethod: 'DEFAULT' | 'SAML' | 'LDAP';
  links: any[];
  advancedConfigurations?: IAdvancedSchemaConfig;
}

export interface IPortalSchemes {
  respCode: number;
  respMsg: string;
  authSchemes: IAuthSchema[];
  publicKey: string;
  isOktaProxied: boolean;
}

// Begin INF8 Interfaces

interface IResponseItem {
  ARQUIVO_ENVIADO: string;
  ARQUIVO_RENOMEADO: string;
  DATA_ENVIO: string;
  QNT_ONTS: number;
  RESPONSAVEL_ENVIO: string;
  STATUS_ENVIO: string;
  TAMANHO: number;
  COMPANYID: string;
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
// Begin INF8 Interfaces
