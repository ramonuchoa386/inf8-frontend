import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../../utils/test/test-utils';
import SidebarHeader from './';

describe('Componente SidebarHeader', () => {
  test('Deve renderizar header do sidebar', () => {
    render(
      <MemoryRouter>
        <SidebarHeader
          logo={require('../../../assets/test/logo-test-jest.png')}
          altImg='Test'
        />
      </MemoryRouter>
    );

    const headerImg = screen.queryByAltText('Test');

    expect(headerImg).toBeInTheDocument();
  });
});
