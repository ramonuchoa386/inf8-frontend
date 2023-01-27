import { Profiles } from '../../utils/enums';

export const mock: {
  profile: Profiles;
  userName: string;
  organization: string;
  email: string;
} = {
  profile: Profiles['OP_VTAL'],
  userName: 'Slim Shady',
  organization: 'ISP dos Sonhos',
  email: 'eminem@ispdossonhos.com',
};
