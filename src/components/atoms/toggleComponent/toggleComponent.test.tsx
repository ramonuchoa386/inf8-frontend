import {
  render,
  rendererCreate,
  cleanup,
} from '../../../utils/test/test-utils';
import { ToggleComponent } from './';
import theme from '../../../styles/theme';

describe('ToggleComponent component test', () => {
  afterAll(cleanup);

  test('should render ToggleComponent component correctly', () => {
    const { getByTestId } = render(
      <ToggleComponent toggle={true} data-testid='toggle-component-test' />
    );

    expect(getByTestId('toggle-component-test')).toBeInTheDocument();
  });

  test('should render ToggleComponent component default styles correctly', () => {
    const component = rendererCreate(
      <ToggleComponent toggle={true} />
    ).toJSON();

    expect(component).toHaveStyleRule(
      'border-radius',
      `calc(100 * ${theme.effects.borderRadius})`
    );
    expect(component).toHaveStyleRule(
      'border',
      `1px solid ${theme.colors.Cod}`
    );
    expect(component).toHaveStyleRule('padding', '2px');
  });

  describe('should match the choosen borderColor correctly', () => {
    test('should match Mauve theme', () => {
      const component = rendererCreate(
        <ToggleComponent toggle={false} borderColor='Mauve' />
      ).toJSON();

      expect(component).not.toHaveStyleRule(
        'border',
        `1px solid ${theme.colors.Cod}`
      );
    });

    test('should match Green theme', () => {
      const { getByTestId } = render(
        <ToggleComponent
          toggle={false}
          borderColor='Green'
          data-testid='toggle-component-test'
        />
      );

      expect(getByTestId('toggle-component-test')).not.toHaveStyle(
        `border: 1px solid ${theme.colors.Cod}`
      );
    });
  });
});
