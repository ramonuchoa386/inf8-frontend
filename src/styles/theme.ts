const defaultSetting = {
  fontFamily: {
    verdana: "'Verdana', sans-serif",
    Inter: 'Inter',
  },
  fontSize: {
    small: {
      mobile: '',
      tablet: '',
      desktop: '',
    },
    medium: {},
    large: {},
  },
  layout: {
    breakpoints: {
      mobile: '320px', // 320px
      tablet: '768px', // 768px
      desktop: '1024px', // 1024px
      desktopLarge: '1366px', // 1366px
    },
  },
};

const customEffects = {
  borderRadius: '4px',
  boxShadow: '0 1px 2px rgb(60 64 67 / 30%),0 1px 3px rgb(60 64 67 / 15%)',
};

const colorPalette = {
  primary: '#F1FF00',
  white: '#FFF',
  coral: '#FF805E',
  lilac: '#B996FF',
  green: '#33FFB4',
  pitchBlack: '#191918',
  black: '#464643',
  darkGray: '#73736E',
  gray: '#A0A098',
  lightGray: '#CFCFC4',
  warning: '#FFA722',
  negative: '#FF4242',
  positive: '#04CF00',
};

const theme = {
  name: 'DEFAULT',
  colors: {
    Coral: '#FF805E',
    Mauve: '#B996FF',
    Green: '#33FFB4',
    Cod: '#191918',
    Fuscous: '#464643',
    ironside: '#73736E',
    delta: '#A0A098',
    celeste: '#CFCFC4',
    ...colorPalette,
  },
  effects: customEffects,
  ...defaultSetting,
};

export type ColorPalette = keyof typeof theme.colors;

export default theme;
