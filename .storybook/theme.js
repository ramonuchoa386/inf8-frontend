import { create } from '@storybook/theming';
import { version } from '../package.json';
export default create({
  base: 'ligth',
  brandTitle: `Portal Apim ${version}`,
  brandUrl: '#',
  fontBase: '"Arial", sans-serif',
  fontCode: 'Arial',
  fontSize: '16px',
  // brandImage: 'https://www.vtal.com.br/images/vtal-logo.svg',
  appBg: '#FFF',
  colorPrimary: '#F1FF00',
  colorSecondary: '#73736E',
});
