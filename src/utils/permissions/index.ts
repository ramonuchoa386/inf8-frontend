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

enum CanViewFullList {
  OP_VTAL,
}

export enum Permissions {
  VIEW = 'VIEW',
  UPLOAD = 'UPLOAD',
  FULL_VIEW = 'FULL_VIEW',
}

function validateUserPermissions(
  profile: Profiles,
  permission: Permissions
): boolean {
  let permitted = false;

  switch (permission) {
    case Permissions.FULL_VIEW:
      permitted = profile in CanViewFullList;
      break;
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
