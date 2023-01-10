import { ReactComponent as KeyOtk } from './key-otk.svg';
import { ReactComponent as ArrowCollapsedLeft } from './arrow-collapsed-left.svg';
import { ReactComponent as ArrowCollapsedright } from './arrow-collapsed-right.svg';
import { ReactComponent as Cwp } from './cwp.svg';
import { ReactComponent as Dashboard } from './dashboard.svg';
import { ReactComponent as Apis } from './apis.svg';
import { ReactComponent as logs } from './logs.svg';

const IconsLib = {
  KeyOtk,
  ArrowCollapsedLeft,
  ArrowCollapsedright,
  Cwp,
  Dashboard,
  Apis,
  logs,
};

export type TypeIcons = keyof typeof IconsLib;

export default IconsLib;
