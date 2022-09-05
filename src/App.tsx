import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';

import Routes from './routes';

// Globals
import GlobalStyles from './styles/global';
import GlobalContext from './context/';

//css
import 'react-pro-sidebar/dist/css/styles.css';
import theme from './styles/theme';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <GlobalContext>
            <Routes />
          </GlobalContext>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
