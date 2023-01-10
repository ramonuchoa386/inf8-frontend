import React from 'react';
import { render, screen } from '../../../utils/test/test-utils';
import ApiListOptions from '.';
import { act } from 'react-dom/test-utils';

it('Deve renderizar as opções do listagem de apis', () => {
  act(() => {
    render(
      <div data-testid='api'>
        <ApiListOptions triggerSearch={() => jest.fn((e) => e())} />
      </div>
    );
  });
  const api = screen.getByTestId('api');
  expect(api).toBeEnabled();
  expect(api).toHaveTextContent('Pesquisar');
});
