import { create } from '@storybook/theming';
import packageInfo from '../package.json';
export default create({
  base: 'ligth',
  brandTitle: `V.tal Frontend Boilerplate ${packageInfo.version}`,
  brandUrl: '#',
  fontBase: '"Arial", sans-serif',
  fontCode: 'Arial',
  fontSize: '16px',
  appBg: '#FFF',
  colorPrimary: '#F1FF00',
  colorSecondary: '#73736E',
});
