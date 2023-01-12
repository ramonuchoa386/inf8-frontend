import validateUserPermissions, { Permissions } from '.';
import { Profiles } from '../enums';

describe('Validate User Permissions module tests', () => {
  describe('Validate wrong permissions', () => {
    test('should return false for non existing permission', () => {
      const permitted = validateUserPermissions(
        Profiles['CP_MASTER'],
        'CHECK_ANOTHER_CP' as Permissions
      );

      expect(permitted).toBeFalsy();
    });
  });

  describe('Validate wrong profiles', () => {
    test('should return false for non existing profile try to upload file', () => {
      const permitted = validateUserPermissions(
        'IAM_HACKER' as Profiles,
        Permissions['UPLOAD']
      );

      expect(permitted).toBeFalsy();
    });

    test('should return false for non existing profile try to view logs', () => {
      const permitted = validateUserPermissions(
        'IAM_HACKER' as Profiles,
        Permissions['VIEW']
      );

      expect(permitted).toBeFalsy();
    });
  });

  describe('Validate upload permissions', () => {
    test('should return true for CP_MASTER upload file', () => {
      const permitted = validateUserPermissions(
        Profiles['CP_MASTER'],
        Permissions['UPLOAD']
      );

      expect(permitted).toBeTruthy();
    });

    test('should return true for CP_ADMIN upload file', () => {
      const permitted = validateUserPermissions(
        Profiles['CP_ADMIN'],
        Permissions['UPLOAD']
      );

      expect(permitted).toBeTruthy();
    });

    test('should return false for OP_VTAL upload file', () => {
      const permitted = validateUserPermissions(
        Profiles['OP_VTAL'],
        Permissions['UPLOAD']
      );

      expect(permitted).toBeFalsy();
    });

    test('should return false for VW_VTAL upload file', () => {
      const permitted = validateUserPermissions(
        Profiles['VW_VTAL'],
        Permissions['UPLOAD']
      );

      expect(permitted).toBeFalsy();
    });
  });

  describe('Validate view logs permissions', () => {
    test('should return true for CP_MASTER view logs', () => {
      const permitted = validateUserPermissions(
        Profiles['CP_MASTER'],
        Permissions['VIEW']
      );

      expect(permitted).toBeTruthy();
    });

    test('should return true for CP_ADMIN view logs', () => {
      const permitted = validateUserPermissions(
        Profiles['CP_ADMIN'],
        Permissions['VIEW']
      );

      expect(permitted).toBeTruthy();
    });

    test('should return true for OP_VTAL view logs', () => {
      const permitted = validateUserPermissions(
        Profiles['OP_VTAL'],
        Permissions['VIEW']
      );

      expect(permitted).toBeTruthy();
    });

    test('should return true for VW_VTAL view logs', () => {
      const permitted = validateUserPermissions(
        Profiles['VW_VTAL'],
        Permissions['VIEW']
      );

      expect(permitted).toBeTruthy();
    });
  });
});
