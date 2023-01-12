import React from 'react';
import { render, screen, fireEvent } from '../../../utils/test/test-utils';
import Paginacao from '.';

describe('Paginacao component tests', () => {
  test('Deve renderizar um componente de paginacao', () => {
    render(
      <Paginacao
        data-testid='paginacao'
        actualPage={0}
        qtdPag={5}
        setPage={(e) => console.log(e) as any}
        setQtdItems={(e) => console.log(e) as any}
        selectedOptPage={1}
      />
    );

    const pag = screen.getByTestId('paginacao');
    const p = expect(pag);
    p.toBeEnabled();
    p.toHaveTextContent('1');
    p.toHaveTextContent('2');
    p.toHaveTextContent('3');
    p.toHaveTextContent('5');
    p.toContainHTML('<button');
  });

  test('botoes devem ser clicaveis', () => {
    const { getAllByRole } = render(
      <Paginacao
        actualPage={3}
        qtdPag={8}
        setPage={(e) => jest.fn(() => e)}
        setQtdItems={(e) => jest.fn(() => e)}
        selectedOptPage={1}
      />
    );

    const btnList = getAllByRole('button');

    btnList.forEach((btn) => {
      fireEvent.click(btn);
    });

    expect(btnList.length).toBe(10);
  });

  test('select deve ser clicavel', () => {
    const { getAllByRole } = render(
      <Paginacao
        actualPage={3}
        qtdPag={8}
        setPage={(e) => jest.fn(() => e)}
        setQtdItems={(e) => jest.fn(() => e)}
        selectedOptPage={1}
      />
    );

    const select = getAllByRole('combobox');
    const clickSelectEvent = fireEvent.click(select[0]);
    expect(clickSelectEvent).toBeTruthy();

    const option = getAllByRole('option');
    const clickOptionEvent = fireEvent.click(option[1]);
    expect(clickOptionEvent).toBeTruthy();
  });
});
