import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as VtalSmall } from './vtal-small.svg';

export { Logo, VtalSmall };

const logosLib = {
  Logo,
  VtalSmall,
};

export type TypeIcons = keyof typeof logosLib;

export default logosLib;
