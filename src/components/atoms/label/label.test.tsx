import {
  render,
  rendererCreate,
  cleanup,
} from '../../../utils/test/test-utils';
import { FieldLabel } from './';
import theme from '../../../styles/theme';

describe('FieldLabel component test', () => {
  afterAll(cleanup);

  test('should render FieldLabel component correctly', () => {
    const { getByTestId } = render(
      <FieldLabel data-testid='label-test'>Label Test</FieldLabel>
    );

    expect(getByTestId('label-test')).toBeInTheDocument();
  });

  test('should render FieldLabel component default styles correctly', () => {
    const component = rendererCreate(
      <FieldLabel>Label Test</FieldLabel>
    ).toJSON();

    expect(component).toHaveStyleRule('font-size', '0.625rem');
    expect(component).toHaveStyleRule('color', theme.colors.Cod);
  });

  test('should render FieldLabel component with fixed styles', () => {
    const component = rendererCreate(
      <FieldLabel fixed>Label Test</FieldLabel>
    ).toJSON();

    expect(component).toHaveStyleRule('position', 'absolute');
    expect(component).toHaveStyleRule('left', '0px');
    expect(component).toHaveStyleRule('bottom', '-16px');
  });

  describe('should match the choosen borderColor correctly', () => {
    test('should match Negative theme', () => {
      const component = rendererCreate(
        <FieldLabel color='negative'>Label Test</FieldLabel>
      ).toJSON();

      expect(component).not.toHaveStyleRule('color', theme.colors.Cod);
    });

    test('should match Green theme', () => {
      const { getByTestId } = render(
        <FieldLabel data-testid='label-test' color='Green'>
          Label Test
        </FieldLabel>
      );

      expect(getByTestId('label-test')).not.toHaveStyle(
        `border: 1px solid ${theme.colors.Cod}`
      );
    });
  });
});
