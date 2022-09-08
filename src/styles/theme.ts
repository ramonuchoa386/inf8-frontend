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

const theme = {
  name: 'DEFAULT',
  colors: {
    primary: '#F1FF00',
    white: '#FFF',
    baseSecondary: {
      Coral: '#FF805E',
      Mauve: '#B996FF',
      Green: '#33FFB4',
    },
    baseGray: {
      Cod: '#191918',
      Fuscous: '#464643',
      ironside: '#73736E',
      delta: '#A0A098',
      celeste: '#CFCFC4',
    },
    baseFeedback: {
      warning: '#FFA722',
      negative: '#FF4242',
      positive: '#04CF00',
    },
  },
  effects: customEffects,
  ...defaultSetting,
};

export default theme;
