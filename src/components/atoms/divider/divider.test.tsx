import React from 'react';
import { render } from '../../../utils/test/test-utils';
import theme from '../../../styles/theme';
import { Divider } from './';

describe('Divider component tests', () => {
  test('should render the component correctly', () => {
    const { getByTestId } = render(<Divider data-testid='divider' />);

    expect(getByTestId('divider')).toBeInTheDocument();
  });

  test('should render the Divider component with custom color', () => {
    const { getByTestId } = render(
      <Divider data-testid='divider' lineColor='Coral' />
    );

    expect(getByTestId('divider')).toHaveStyle(
      `border-color: ${theme.colors.Coral}`
    );
  });

  test('should render the Divider component with shadow', () => {
    const { getByTestId } = render(
      <Divider data-testid='divider' withShadow />
    );

    expect(getByTestId('divider')).toHaveStyle(
      `box-shadow: 0px 3px 15px ${theme.colors.primary}`
    );
  });

  test('should render the Divider component with shadow and custom color', () => {
    const { getByTestId } = render(
      <Divider data-testid='divider' withShadow lineColor='positive' />
    );

    expect(getByTestId('divider')).toHaveStyle(
      `border-color: ${theme.colors.positive}`
    );
    expect(getByTestId('divider')).toHaveStyle(
      `box-shadow: 0px 3px 15px ${theme.colors.positive}`
    );
  });
});
