import { addDecorator } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';
import GlobalContext from '../src/context';
import 'react-pro-sidebar/dist/css/styles.css';
import { HelmetProvider } from 'react-helmet-async';

const themes = [theme];
addDecorator(withThemesProvider(themes, ThemeProvider));

const GlobalStyle = createGlobalStyle`
body  {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  text-rendering: optimizeLegibility;
  font-family: Inter;
  color: #464643;

  .docs-story {
    margin: 30px;
  }
}
`;

// View ports
const customViewports = {
  artboard320: {
    name: 'artboard320',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  artboard360: {
    name: 'artboard360',
    styles: {
      width: '360px',
      height: '600px',
    },
  },
  artboard768: {
    name: 'artboard768',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  artboard1024: {
    name: 'artboard1024',
    styles: {
      width: '1024px',
      height: '800px',
    },
  },
  artboard1366: {
    name: 'artboard1366',
    styles: {
      width: '1366px',
      height: '1024px',
    },
  },
};

/** If the string contains a phrase, prefix it. This is useful for making ordering sections */
const prefix =
  (phrase: string, prefix: string) => (/** @type {string} */ value: string) => {
    const index = value.indexOf(phrase);
    return index > -1
      ? value.substr(0, index) + prefix + value.substr(index)
      : value;
  };
const pipe =
  (...fns: { (value: any): any; (value: any): any; (value: any): any }[]) =>
  (value: any) =>
    fns.reduce((result, fn) => fn(result), value);

function storySort(a: any[], b: any[]) {
  const prefixFn = pipe(
    prefix('introdução-', '0'),
    prefix('primeiros-', 'a'),
    prefix('docs-', '1'),
    prefix('components-', '2')
  );

  const left = prefixFn(a[0]);
  const right = prefixFn(b[0]);

  return left === right ? 0 : left.localeCompare(right);
}

export const decorators = [
  (Story: Story) => (
    <>
      <HelmetProvider>
        <GlobalStyle />
        <GlobalContext>
          <Story />
        </GlobalContext>
      </HelmetProvider>
    </>
  ),
];

export const parameters = {
  options: {
    storySort,
  },
  actions: {
    handles: ['click'],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'ligth',
    values: [
      {
        name: 'ligth',
        value: '#FFF',
      },
      {
        name: 'dark',
        value: '#191918',
      },
      {
        name: 'primary',
        value: '#F1FF00',
      },
    ],
  },
  viewport: { viewports: customViewports },
  layout: 'fullscreen',
};
