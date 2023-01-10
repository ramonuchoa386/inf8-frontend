import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import P from './';
import theme from '../../../styles/theme';

describe('Paragraph component', () => {
  test('Deve renderizar um parágrafo', async () => {
    render(
      <ThemeProvider theme={theme}>
        <P>Test</P>
      </ThemeProvider>
    );

    const paragraph = screen.getByText('Test');

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toContainHTML('p');
  });

  test('Deve renderizar um parágrafo customizado', async () => {
    render(
      <ThemeProvider theme={theme}>
        <P size='large' weight='bold'>
          Test
        </P>
      </ThemeProvider>
    );

    const paragraph = screen.getByText('Test');

    expect(paragraph).toBeInTheDocument();
  });

  test('Deve renderizar um parágrafo customizado', async () => {
    render(
      <ThemeProvider theme={theme}>
        <P size='small' weight='light'>
          Test
        </P>
      </ThemeProvider>
    );

    const paragraph = screen.getByText('Test');

    expect(paragraph).toBeInTheDocument();
  });

  test('Deve renderizar um parágrafo customizado', async () => {
    render(
      <ThemeProvider theme={theme}>
        <P size='normal' weight='normal'>
          Test
        </P>
      </ThemeProvider>
    );

    const paragraph = screen.getByText('Test');

    expect(paragraph).toBeInTheDocument();
  });
});
