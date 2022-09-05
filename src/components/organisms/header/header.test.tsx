import React from 'react';
import { screen } from '@testing-library/react';
import Header from '.';
import { render } from './../../../utils/test/test-utils';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
  test('Deve carregar o header', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const page = screen.getByTestId('HeaderID');

    expect(page).toBeInTheDocument();
  });
});
