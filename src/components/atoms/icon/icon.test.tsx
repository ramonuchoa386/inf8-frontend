import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { TypeIcons } from './../../../assets/icons';
import Icon from '.';

describe('Icon component', () => {
  test('Deve renderizar um ícone SVG', async () => {
    render(<Icon name='KeyOtk' />);

    const icon = screen.getByTestId('svgicon');

    expect(icon).toBeInTheDocument();
    expect(icon).toContainHTML('svg');
    expect(icon).toHaveAttribute('font-size', '24px');
    expect(icon).toHaveAttribute('color', '#000');
  });

  test('Deve renderizar um ícone personalizado', async () => {
    const fakeClick = jest.fn();

    render(<Icon name='KeyOtk' size='80px' color='red' onClick={fakeClick} />);

    const icon = screen.getByTestId('svgicon');

    fireEvent.click(icon);
    expect(fakeClick).toHaveBeenCalledTimes(1);

    expect(icon).toBeInTheDocument();
    expect(icon).toContainHTML('svg');
    expect(icon).not.toHaveAttribute('font-size', '24px');
    expect(icon).not.toHaveAttribute('color', '#000');
  });

  test('Não deve renderizar um ícone SVG', async () => {
    render(<Icon name={'no-name' as TypeIcons} />);

    const icon = screen.queryByTestId('svgicon');

    expect(icon).toBeNull();
  });
});
