/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import configTheme from '../styles/theme';

type CustomTheme = typeof configTheme;
declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
