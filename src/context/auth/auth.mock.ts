import { Profiles } from '../../utils/enums';
import { IUserInfo } from '.';

type IMock = Omit<IUserInfo, 'logged'>;

export const MOCK_OP_VTAL: IMock = {
  profile: Profiles['OP_VTAL'],
  userName: 'Slim Shady',
  email: 'eminem@ispdossonhos.com',
};

export const MOCK_VW_VTAL: IMock = {
  profile: Profiles['VW_VTAL'],
  userName: 'Slim Shady',
  email: 'eminem@ispdossonhos.com',
};

export const MOCK_CP_MASTER: IMock = {
  profile: Profiles['CP_MASTER'],
  userName: 'Slim Shady',
  organization: 'vero',
  email: 'eminem@ispdossonhos.com',
};

export const MOCK_CP_ADMIN: IMock = {
  profile: Profiles['CP_ADMIN'],
  userName: 'Slim Shady',
  organization: 'oi',
  email: 'eminem@ispdossonhos.com',
};
