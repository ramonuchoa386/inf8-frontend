import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/test/test-utils';
import theme from '../../../styles/theme';
import Button from '.';

describe('ButtonRouter component', () => {
  test('Deve renderizar um botão default', async () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Button text='Test' />
        </BrowserRouter>
      </ThemeProvider>
    );

    const button = screen.getByText('Test');

    expect(button).toHaveTextContent('Test');

    expect(button).toHaveStyle(`
      font-size: 14px;
      width: fit-content;
      height: fit-content;
      color: ${theme.colors.baseSecondary.Coral};
      border: 1px solid ${theme.colors.baseSecondary.Coral};
    `);

    expect(button).toHaveStyleRule('color', theme.colors.white, {
      modifier: ':hover',
    });

    expect(button).toHaveStyleRule(
      'background-color',
      theme.colors.baseSecondary.Coral,
      { modifier: ':hover' }
    );
  });

  //   Primary style test
  test('Deve renderizar um botão primary', async () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Button text='Test' styledType='primary' />
        </BrowserRouter>
      </ThemeProvider>
    );
    const button = screen.getByText('Test');

    expect(button).toHaveTextContent('Test');

    expect(button).toHaveStyle(`
      font-size: 14px;
      width: fit-content;
      height: fit-content;
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    `);

    expect(button).toHaveStyleRule('color', theme.colors.baseGray.Fuscous, {
      modifier: ':hover',
    });

    expect(button).toHaveStyleRule('background-color', theme.colors.primary, {
      modifier: ':hover',
    });
  });

  //   Dark style test
  test('Deve renderizar um botão dark', async () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Button text='Test' styledType='dark' />
        </BrowserRouter>
      </ThemeProvider>
    );
    const button = screen.getByText('Test');

    expect(button).toHaveTextContent('Test');

    expect(button).toHaveStyle(`
      font-size: 14px;
      width: fit-content;
      height: fit-content;
      color: ${theme.colors.baseGray.Cod};
      border: 1px solid ${theme.colors.baseGray.Cod};
    `);

    expect(button).toHaveStyleRule('color', theme.colors.white, {
      modifier: ':hover',
    });

    expect(button).toHaveStyleRule(
      'background-color',
      theme.colors.baseGray.Cod,
      { modifier: ':hover' }
    );
  });

  //   WHITE style test
  test('Deve renderizar um botão white', async () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Button text='Test' styledType='white' />
        </BrowserRouter>
      </ThemeProvider>
    );
    const button = screen.getByText('Test');

    expect(button).toHaveTextContent('Test');

    expect(button).toHaveStyle(`
      font-size: 14px;
      width: fit-content;
      height: fit-content;
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
    `);

    expect(button).toHaveStyleRule('color', theme.colors.baseGray.Cod, {
      modifier: ':hover',
    });

    expect(button).toHaveStyleRule('background-color', theme.colors.white, {
      modifier: ':hover',
    });
  });

  // large text test
  test('Deve renderizar um botão default', async () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Button text='Test' styledSize='large' />
        </BrowserRouter>
      </ThemeProvider>
    );

    const button = screen.getByText('Test');

    expect(button).toHaveTextContent('Test');

    expect(button).toHaveStyle(`
      font-size: 14px;
      width: 260px;
      height: 40px;
      color: ${theme.colors.baseSecondary.Coral};
      border: 1px solid ${theme.colors.baseSecondary.Coral};
    `);

    expect(button).toHaveStyleRule('color', theme.colors.white, {
      modifier: ':hover',
    });

    expect(button).toHaveStyleRule(
      'background-color',
      theme.colors.baseSecondary.Coral,
      { modifier: ':hover' }
    );
  });

  // medium text test
  test('Deve renderizar um botão default', async () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Button text='Test' styledSize='medium' />
        </BrowserRouter>
      </ThemeProvider>
    );

    const button = screen.getByText('Test');

    expect(button).toHaveTextContent('Test');

    expect(button).toHaveStyle(`
      font-size: 14px;
      width: 180px;
      height: 40px;
      color: ${theme.colors.baseSecondary.Coral};
      border: 1px solid ${theme.colors.baseSecondary.Coral};
    `);

    expect(button).toHaveStyleRule('color', theme.colors.white, {
      modifier: ':hover',
    });

    expect(button).toHaveStyleRule(
      'background-color',
      theme.colors.baseSecondary.Coral,
      { modifier: ':hover' }
    );
  });
});
