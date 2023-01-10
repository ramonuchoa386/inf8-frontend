import * as BoxIcons from 'react-icons/bi';

export type StatusType =
  | 'ENABLED'
  | 'DISABLED'
  | 'APPLICATION_PENDING_APPROVAL'
  | 'EDIT_APPLICATION_PENDING_APPROVAL'
  | 'REJECTED'
  | 'UNPUBLISHED'
  | 'DEPRECATED'
  | 'NEW';

export type BoxIconsType = keyof typeof BoxIcons;
