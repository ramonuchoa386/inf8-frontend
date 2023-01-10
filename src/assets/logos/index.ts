import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as VtalSmall } from './vtal-small.svg';
import { ReactComponent as LogoNegative } from './logo-negative.svg';

export { Logo, VtalSmall, LogoNegative };

const logosLib = {
  Logo,
  VtalSmall,
  LogoNegative,
};

export type TypeIcons = keyof typeof logosLib;

export default logosLib;
