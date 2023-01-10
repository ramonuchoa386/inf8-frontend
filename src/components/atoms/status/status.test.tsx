import React from 'react';
import { render, screen, rendererCreate } from '../../../utils/test/test-utils';
import Status from './';
import theme from '../../../styles/theme';

describe('Status component', () => {
  test('Deve renderizar o componente Status', async () => {
    render(<Status data-testid='status-test' status='ENABLED' />);

    const component = screen.getByTestId('status-test');

    expect(component).toBeInTheDocument();
  });

  describe('Status component styles test', () => {
    test('Deve renderizar os estilos default', async () => {
      const tree = rendererCreate(<Status status='ENABLED' />).toJSON();

      expect(tree).toHaveStyleRule('color', theme.colors.positive);
      expect(tree).toHaveStyleRule('font-size', '12px');
    });

    test('Deve renderizar com tamanho maior e cor vermelha', async () => {
      const tree = rendererCreate(
        <Status status='DEPRECATED' size='big' />
      ).toJSON();

      expect(tree).toHaveStyleRule('color', theme.colors.negative);
      expect(tree).toHaveStyleRule('font-size', '16px');
    });
  });
});
