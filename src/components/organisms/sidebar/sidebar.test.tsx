import React from 'react';
import { screen } from '@testing-library/react';
import Sidebar from '.';
import { render } from '../../../utils/test/test-utils';
import { MemoryRouter } from 'react-router-dom';

describe('Sidebar component', () => {
  test('Deve carregar o Sidebar', async () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    const page = screen.getByTestId('sidebar-testid');

    expect(page).toBeInTheDocument();
  });
});
