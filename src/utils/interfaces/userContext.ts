type OperationsType = 'CREATE' | 'READ' | 'UPDATE' | 'DELETE' | 'WRITE';

enum PermissionsEnum {
  API = 'API',
  API_DEPLOYMENT = 'API_DEPLOYMENT',
  API_EULA = 'API_EULA',
  PROXY = 'PROXY',
  RATE_QUOTA = 'RATE_QUOTA',
}

type IPermissions = {
  [op in PermissionsEnum]: OperationsType[];
};

interface IAccessibleOrgs {
  [org: string]: string;
}

interface IAthority {
  authority: string;
}

export interface IUserDetails {
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  apiOwner: boolean;
  authenticatedWithRole: boolean;
  authorities: IAthority[];
  avatar: string;
  credentialsNonExpired: boolean;
  developer: boolean;
  email: string;
  enabled: boolean;
  externalUser: boolean;
  firstName: string;
  internalUser: boolean;
  isIdpUser: boolean;
  language: string;
  lastName: string;
  orgAdmin: boolean;
  organizationUuid: string;
  orgPublisher: boolean;
  password: string;
  permissions: IPermissions;
  portalAdmin: boolean;
  roleUuid: string;
  tenantId: string;
  timeout: string;
  token: string;
  username: string;
  uuid: string;
}

export interface IUserContext {
  accessibleOrgs: IAccessibleOrgs;
  activeOrgUuid: string;
  userDetails: IUserDetails;
}

export interface IUserContextProdRes {
  userContexts: IUserContext[];
}

export interface IUserPermissions {
  canAccessPrivateAPI: boolean;
  canEditApplication: boolean;
}
