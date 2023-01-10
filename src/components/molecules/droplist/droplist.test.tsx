import React from 'react';
import { render, screen } from '../../../utils/test/test-utils';
import DropList from '.';
import { act } from 'react-dom/test-utils';

it('Deve renderizar um droplist', () => {
  act(() => {
    render(
      <div data-testid={'drop'}>
        <DropList
          items={[10, 15, 20]}
          setItem={() => console.log('teste') as any}
          selected={1}
        />
      </div>
    );
  });
  const drop = screen.getByTestId('drop');
  expect(drop).toBeEnabled();
  expect(drop).toBeEnabled();
});

it('O droplist deve renderizar um componente html do tipo option', () => {
  act(() => {
    render(
      <div data-testid={'drop'}>
        <DropList
          items={[10, 15, 20]}
          setItem={() => console.log('teste') as any}
          selected={1}
        />
      </div>
    );
  });
  const drop = screen.getByTestId('drop');
  expect(drop).toBeEnabled();
  expect(drop).toContainHTML(`<select`);
});

it('O droplist deve conter os valores 10, 15, 20', () => {
  act(() => {
    render(
      <div data-testid={'drop'}>
        <DropList
          items={[10, 15, 20]}
          setItem={() => console.log('teste') as any}
          selected={1}
        />
      </div>
    );
  });
  const drop = screen.getByTestId('drop');
  expect(drop).toBeEnabled();
  expect(drop).toContainHTML(`<option`);
  expect(drop).toHaveTextContent('10');
  expect(drop).toHaveTextContent('15');
  expect(drop).toHaveTextContent('20');
});
