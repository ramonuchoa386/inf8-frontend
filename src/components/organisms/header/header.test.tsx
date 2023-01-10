import React from 'react';
import { screen } from '@testing-library/react';
import Header from '.';
import { render } from './../../../utils/test/test-utils';

describe('Header component', () => {
  test('Deve carregar o header', async () => {
    render(<Header data-testid='HeaderID' />);

    const page = screen.getByTestId('HeaderID');

    expect(page).toBeInTheDocument();
  });
});
