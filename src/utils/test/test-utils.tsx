import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import theme from '../../styles/theme';
import GlobalContext from '../../context/';
import 'jest-styled-components';
import { create, TestRendererOptions } from 'react-test-renderer';

// // Mock Global
jest.mock('react-helmet-async', () => ({
  Helmet: () => <div />,
  HelmetProvider: () => jest.fn(),
}));

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <GlobalContext>{children}</GlobalContext>
      </MemoryRouter>
    </ThemeProvider>
  );
};

// Função para passar automaticamente o tema para os páginas/componentes
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };

// Função para passar automaticamente o tema para os páginas/componentes
const customRendererCreate = (
  nextElement: ReactElement,
  options?: TestRendererOptions | undefined
) => create(<AllTheProviders>{nextElement}</AllTheProviders>, options);

export { customRendererCreate as rendererCreate };
