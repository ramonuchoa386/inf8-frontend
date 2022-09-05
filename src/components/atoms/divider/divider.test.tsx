import React from 'react';
import { render, screen } from '../../../utils/test/test-utils';
import Divider from './';
import { act } from 'react-dom/test-utils';
import themeStyle from '../../../styles/theme';

it('Deve renderizar uma linha com cor default e altura default', () => {
  act(() => {
    render(<Divider data-testid='divider' />);
  });
  const divider = screen.getByTestId('divider');
  expect(divider).toHaveStyle(`border-color: ${themeStyle.colors.primary}`);
  expect(divider).toHaveStyle(`border: 1px solid`);
});

it('Deve renderizar uma linha com cor vermelha', () => {
  act(() => {
    render(<Divider data-testid='divider' color='red' />);
  });
  const divider = screen.getByTestId('divider');
  expect(divider).toHaveStyle('border-color: red');
});

it('Deve renderizar uma linha com altura 10px', () => {
  act(() => {
    render(<Divider data-testid='divider' height={10} />);
  });
  const divider = screen.getByTestId('divider');
  expect(divider).toHaveStyle('border: 10px solid');
});
