import React from 'react';
import { screen } from '@testing-library/react';
import Sidebar from '.';
import { render } from '../../../utils/test/test-utils';

describe('Sidebar component', () => {
  test('Deve carregar o Sidebar', async () => {
    render(<Sidebar />);

    const page = screen.getByTestId('sidebar-testid');

    expect(page).toBeInTheDocument();
  });
});
