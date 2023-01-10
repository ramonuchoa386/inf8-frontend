import { render, screen } from '@testing-library/react';
import Icon from '.';
import theme from '../../../styles/theme';

describe('Icon component', () => {
  test('Deve renderizar um ícone SVG', async () => {
    render(<Icon data-testid='svgicon' iconName='KeyOtk' />);

    const icon = screen.getByTestId('svgicon');

    expect(icon).toBeInTheDocument();
    expect(icon).toContainHTML('svg');
    expect(icon).toHaveAttribute('color', theme.colors.Cod);
  });
});
