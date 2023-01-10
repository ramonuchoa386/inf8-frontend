/**
 * SetUserPermissions script.
 * @module SetUserPermissions
 * @param {ProfilesEnum} [profile] - The user profile.
 * @return {IUserPermissions} The object containing user permissions
 */

import { ProfilesEnum } from '../../enums';
import { IUserPermissions } from '../../interfaces';

export const SetUserPermissions = (
  profile: ProfilesEnum | 'NONE'
): IUserPermissions => {
  const userPermissions = {
    canAccessPrivateAPI: false,
    canEditApplication: false,
  };

  switch (profile) {
    case ProfilesEnum.OP_VTAL:
      userPermissions.canAccessPrivateAPI = true;
      userPermissions.canEditApplication = true;
      break;
    case ProfilesEnum.APIHUB_ADMIN:
      userPermissions.canEditApplication = true;
      break;
    case ProfilesEnum.APIHUB_DEV:
    case 'NONE':
      break;
    default:
      break;
  }

  return userPermissions;
};

export default SetUserPermissions;
