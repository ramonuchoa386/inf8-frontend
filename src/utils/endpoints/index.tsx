import React from 'react';
import config from '../config';
import { IApplicationDetailProd } from '../interfaces';

interface IPAPIEndpoint {
  page: string;
  size: string | number;
  searchField?: string;
}

export interface EndpointListApiInterface extends IPAPIEndpoint {
  sort: string;
  ordenacao: string;
  accessStatus?: string;
  portalStatus?: string;
  apiServiceType?: string;
  tag?: string;
}

export interface EndpointApplicationsListInterface extends IPAPIEndpoint {
  status?: string;
}

export interface EndpointUserContextsInterface {
  uuid: string;
  userContexts: [
    {
      activeOrgUuid: string;
      accessibleOrgs: any;
      userDetails: {
        lastName: string;
        firstName: string;
        portalAdmin: boolean;
        orgAdmin: boolean;
        developer: boolean;
        username: string;
        email: string;
        token: string;
      };
    }
  ];
}

async function userContexts() {
  const url = config.PAPI_BASEURL + config.PAPI_USER_CONTEXTS;

  const data = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Origin-Hub-Name': config.ORIGIN_HUB_NAME,
    }),
  }).then((data) => {
    return data.json();
  });

  return data;
}

async function ListApi(params: EndpointListApiInterface) {
  const {
    page,
    size,
    sort,
    ordenacao,
    searchField,
    accessStatus,
    portalStatus,
    apiServiceType,
    tag,
  } = params;
  const url = config.PAPI_BASEURL + config.PAPI_API_LIST;
  const urlParams = new URLSearchParams({
    ...(searchField && {
      description: searchField,
      name: searchField,
    }),
    ...(tag && { tags: tag }),
    ...(portalStatus && { portalStatus: portalStatus }),
    ...(accessStatus && { accessStatus: accessStatus }),
    ...(apiServiceType && { apiServiceType: apiServiceType }),
    page: page,
    size: size as string,
    sort: sort + ordenacao,
  });

  const res = await fetch(url + `?${urlParams.toString()}`, {
    method: 'GET',
    credentials: 'include',
    headers: new Headers({
      'Origin-Hub-Name': config.ORIGIN_HUB_NAME,
    }),
  }).then((res) => {
    return res.json();
  });

  return res;
}

async function getTags() {
  const url = config.PAPI_BASEURL + config.PAPI_TAGS_LIST;

  const res = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: new Headers({
      'Origin-Hub-Name': config.ORIGIN_HUB_NAME,
    }),
  }).then((res) => {
    return res.json();
  });

  return res;
}

async function getApi(ApiUUID: string, suffix?: string) {
  const s = suffix ? suffix : '';
  const url =
    config.PAPI_BASEURL + config.PAPI_API_MANAGEMENT + `${ApiUUID}` + s;

  const res = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: new Headers({
      'Origin-Hub-Name': config.ORIGIN_HUB_NAME,
    }),
  }).then((res) => {
    return res.json();
  });

  return res;
}

async function getApplications(params: EndpointApplicationsListInterface) {
  const { page, size, searchField, status } = params;
  const url = config.PAPI_BASEURL + config.PAPI_APPLICATION_LIST;

  const query = new URLSearchParams({
    $select: 'Name,Uuid,ApiKey,Status,Description',
    page: page.toString(),
    size: size.toString(),
    sort: 'name,ASC',
    ...(searchField && {
      name: searchField,
    }),
    ...(status && {
      status: status.toLocaleUpperCase(),
    }),
  });

  const res = await fetch(url + `?${query.toString()}`, {
    method: 'GET',
    credentials: 'include',
    headers: new Headers({
      'Origin-Hub-Name': config.ORIGIN_HUB_NAME,
    }),
  }).then((res) => {
    return res.json();
  });

  return res;
}

async function getApplicationDetails(appId: string) {
  const url = config.PAPI_BASEURL + config.PAPI_APPLICATION_DETAIL(appId);

  const res = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: new Headers({
      'Origin-Hub-Name': config.ORIGIN_HUB_NAME,
    }),
  }).then((res) => {
    return res.json();
  });

  return res;
}

async function updateApplicationDetails(
  appId: string,
  payload: Partial<IApplicationDetailProd>
) {
  const url = config.PAPI_BASEURL + config.PAPI_APPLICATION_DETAIL(appId);

  const res = await fetch(url, {
    method: 'PUT',
    credentials: 'include',
    headers: new Headers({
      'Content-Type': 'application/json;charset=utf-8',
      'Origin-Hub-Name': config.ORIGIN_HUB_NAME,
    }),
    body: JSON.stringify(payload),
  }).then((res) => {
    return res;
  });

  return res;
}

async function getApplicationRelatedApks(appUuid: string) {
  const url =
    config.PAPI_BASEURL +
    config.PAPI_APPLICATION_LIST +
    '/' +
    appUuid +
    '/api-keys';

  const res = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: new Headers({
      'Origin-Hub-Name': config.ORIGIN_HUB_NAME,
    }),
  }).then((res) => {
    return res.json();
  });

  return res;
}

async function getApplicationRelatedApkDetail(appUuid: string, apiKey: string) {
  const url =
    config.PAPI_BASEURL +
    config.PAPI_APPLICATION_LIST +
    '/' +
    appUuid +
    '/api-keys/' +
    apiKey;

  const res = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: new Headers({
      'Origin-Hub-Name': config.ORIGIN_HUB_NAME,
    }),
  }).then((res) => {
    return res.json();
  });

  return res;
}

async function getApisRelatedList() {
  const url = config.PAPI_BASEURL + config.PAPI_APPLICATION_RELATED_APIS;

  const res = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: new Headers({
      'Origin-Hub-Name': config.ORIGIN_HUB_NAME,
    }),
  }).then((res) => {
    return res.json();
  });

  return res;
}

async function getApisGroups() {
  const url = config.PAPI_BASEURL + config.PAPI_APIGROUP_LIST;

  const res = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: new Headers({
      'Origin-Hub-Name': config.ORIGIN_HUB_NAME,
    }),
  }).then((res) => {
    return res.json();
  });

  return res;
}

async function getAPIGroupDetail(groupId: string) {
  const url = config.PAPI_BASEURL + config.PAPI_APIGROUP_LIST + '/' + groupId;

  const res = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: new Headers({
      'Origin-Hub-Name': config.ORIGIN_HUB_NAME,
    }),
  }).then((res) => {
    return res.json();
  });

  return res;
}

interface ILogin {
  user: string;
  pass: string;
}

async function login(data: ILogin) {
  const { pass, user } = data;
  const url = config.PAPI_BASEURL + config.PAPI_USER_AUTH;

  const res = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Origin-Hub-Name': config.ORIGIN_HUB_NAME,
    }),
    body: JSON.stringify({
      username: user,
      password: pass,
      eula: 'accept',
      provider: null,
    }),
  }).then((res) => {
    return res.json();
  });

  return res;
}

async function logout() {
  const url = config.PAPI_BASEURL + config.PAPI_USER_LOGOUT;

  const res = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: new Headers({
      'Origin-Hub-Name': config.ORIGIN_HUB_NAME,
    }),
  }).then((res) => res);

  return res;
}

async function getPortalSchema() {
  const url = config.PAPI_BASEURL + config.PAPI_PORTAL_SCHEMA;

  const res = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: new Headers({
      'Origin-Hub-Name': config.ORIGIN_HUB_NAME,
    }),
  }).then((res) => {
    return res.json();
  });

  return res;
}

const Endpoints = {
  ListApi,
  getApi,
  getApplications,
  getTags,
  getApplicationDetails,
  getApplicationRelatedApks,
  getApplicationRelatedApkDetail,
  getApisRelatedList,
  userContexts,
  logout,
  updateApplicationDetails,
  getAPIGroupDetail,
  getApisGroups,
  login,
  getPortalSchema,
};

export default Endpoints;
