/**
 * SetUserProfile script.
 * @module SetUserProfile
 * @param {Pick<IUserDetails, 'developer' | 'portalAdmin' | 'orgAdmin'>} [profileSet] - The object containing profile intel.
 * @return {ProfilesEnum} The user profile.
 */

import { ProfilesEnum } from '../../enums';
import { IUserDetails } from '../../interfaces';

export const SetUserProfile = (
  profileSet: Pick<IUserDetails, 'developer' | 'portalAdmin' | 'orgAdmin'>
): ProfilesEnum | 'NONE' => {
  const { developer, orgAdmin, portalAdmin } = profileSet;

  if (!developer && !orgAdmin && portalAdmin) return ProfilesEnum.OP_VTAL;

  if (!developer && orgAdmin && !portalAdmin) return ProfilesEnum.APIHUB_ADMIN;

  if (developer && !orgAdmin && !portalAdmin) return ProfilesEnum.APIHUB_DEV;

  return 'NONE';
};

export default SetUserProfile;
