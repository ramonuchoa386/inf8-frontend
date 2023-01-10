import SetUserProfile from '.';
import { ProfilesEnum } from '../../enums';

describe('SetUserProfile module tests', () => {
  test('should return OP_VTAL profile', () => {
    const MOCK_OP_VTAL = {
      developer: false,
      orgAdmin: false,
      portalAdmin: true,
    };

    expect(SetUserProfile(MOCK_OP_VTAL)).toBe(ProfilesEnum.OP_VTAL);
  });

  test('should return APIHUB_ADMIN profile', () => {
    const MOCK_APIHUB_ADMIN = {
      developer: false,
      orgAdmin: true,
      portalAdmin: false,
    };

    expect(SetUserProfile(MOCK_APIHUB_ADMIN)).toBe(ProfilesEnum.APIHUB_ADMIN);
  });

  test('should return APIHUB_DEV profile', () => {
    const MOCK_APIHUB_DEV = {
      developer: true,
      orgAdmin: false,
      portalAdmin: false,
    };

    expect(SetUserProfile(MOCK_APIHUB_DEV)).toBe(ProfilesEnum.APIHUB_DEV);
  });

  test('should return NONE profile', () => {
    const MOCK_NONE = {
      developer: true,
      orgAdmin: true,
      portalAdmin: false,
    };

    expect(SetUserProfile(MOCK_NONE)).toBe('NONE');
  });
});
