import { EndpointUserContextsInterface } from '../endpoints';

import { Profiles as ProfileEnum } from '../enums';

export type ProfileConfig = {
  canAccessListAPI?: {
    canSearchPrivateAPI: boolean;
    canSeeDetailsAPI: boolean;
  };
  canAccessListApplication?: {
    canAccessApplicationDetails?: {
      canEditApplicattion: boolean;
    };
  };
};

const OP_VTAL: ProfileConfig = {
  canAccessListAPI: {
    canSearchPrivateAPI: true,
    canSeeDetailsAPI: true,
  },
  canAccessListApplication: {
    canAccessApplicationDetails: {
      canEditApplicattion: true,
    },
  },
};

const APIHUB_ADMIN: ProfileConfig = {
  canAccessListAPI: {
    canSearchPrivateAPI: false,
    canSeeDetailsAPI: true,
  },
  canAccessListApplication: {
    canAccessApplicationDetails: {
      canEditApplicattion: true,
    },
  },
};

const APIHUB_DEV: ProfileConfig = {
  canAccessListAPI: {
    canSearchPrivateAPI: false,
    canSeeDetailsAPI: true,
  },
  canAccessListApplication: {
    canAccessApplicationDetails: {
      canEditApplicattion: false,
    },
  },
};

const Profiles = {
  OP_VTAL,
  APIHUB_ADMIN,
  APIHUB_DEV,
};

const getPermissionsR = (
  userContextResponse: EndpointUserContextsInterface
) => {
  const profile = () => {
    if (userContextResponse.userContexts[0].userDetails.portalAdmin) {
      return {
        profileConfig: Profiles[ProfileEnum['PORTALADMIN']],
        profileName: ProfileEnum['PORTALADMIN'],
      };
    }
    if (userContextResponse.userContexts[0].userDetails.orgAdmin) {
      return {
        profileConfig: Profiles[ProfileEnum['CPADMIN']],
        profileName: ProfileEnum['CPADMIN'],
      };
    }
    if (userContextResponse.userContexts[0].userDetails.developer) {
      return {
        profileConfig: Profiles[ProfileEnum['CPDEV']],
        profileName: ProfileEnum['CPDEV'],
      };
    }
    throw new Error('Permissão invalida');
  };

  const config = profile();

  return config;
};

export {
  ProfileEnum,
  Profiles,
  getPermissionsR,
  OP_VTAL,
  APIHUB_ADMIN,
  APIHUB_DEV,
};
