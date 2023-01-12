import { Profiles } from '../enums';

enum CanUploadFiles {
  CP_MASTER,
  CP_ADMIN,
}

enum CanViewLogs {
  OP_VTAL,
  VW_VTAL,
  CP_MASTER,
  CP_ADMIN,
}

export enum Permissions {
  VIEW = 'VIEW',
  UPLOAD = 'UPLOAD',
}

function validateUserPermissions(
  profile: Profiles,
  permission: Permissions
): boolean {
  let permitted = false;

  switch (permission) {
    case Permissions.VIEW:
      permitted = profile in CanViewLogs;
      break;
    case Permissions.UPLOAD:
      permitted = profile in CanUploadFiles;
      break;
    default:
      permitted = false;
      break;
  }

  return permitted;
}

export default validateUserPermissions;
