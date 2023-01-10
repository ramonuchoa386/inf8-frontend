import SetUserPermissions from '.';
import { ProfilesEnum } from '../../enums';

describe('SetUserPermissions module tests', () => {
  test('should return OP_VTAL permissions', () => {
    expect(SetUserPermissions(ProfilesEnum.OP_VTAL)).toMatchObject({
      canAccessPrivateAPI: true,
      canEditApplication: true,
    });
  });

  test('should return APIHUB_ADMIN permissions', () => {
    expect(SetUserPermissions(ProfilesEnum.APIHUB_ADMIN)).toMatchObject({
      canAccessPrivateAPI: false,
      canEditApplication: true,
    });
  });

  test('should return APIHUB_DEV permissions', () => {
    expect(SetUserPermissions(ProfilesEnum.APIHUB_DEV)).toMatchObject({
      canAccessPrivateAPI: false,
      canEditApplication: false,
    });
  });

  test('should return all permissions false', () => {
    expect(SetUserPermissions('NONE')).toMatchObject({
      canAccessPrivateAPI: false,
      canEditApplication: false,
    });
  });
});
