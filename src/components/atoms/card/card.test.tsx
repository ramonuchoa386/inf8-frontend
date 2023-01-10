import React from 'react';
import { render } from '../../../utils/test/test-utils';
import { Card } from '.';
import theme from '../../../styles/theme';

describe('Card component tests', () => {
  test('should render card component correctly', () => {
    const { getByTestId } = render(
      <Card data-testid='card-test'>Conteúdo</Card>
    );

    expect(getByTestId('card-test')).toBeInTheDocument();
  });

  test('should render card component with default styles', () => {
    const { getByTestId } = render(
      <Card data-testid='card-test'>Conteúdo</Card>
    );

    expect(getByTestId('card-test')).toHaveStyle(
      `border-radius: ${theme.effects.borderRadius}`
    );
    expect(getByTestId('card-test')).toHaveStyle(
      `box-shadow: ${theme.effects.boxShadow}`
    );
    expect(getByTestId('card-test')).toHaveStyle('padding: 16px');
  });
});
