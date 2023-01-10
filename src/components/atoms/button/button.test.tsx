import {
  render,
  rendererCreate,
  cleanup,
} from '../../../utils/test/test-utils';
import Button from './';
import theme from '../../../styles/theme';

describe('FieldLabel component test', () => {
  afterAll(cleanup);

  test('should render Button component correctly', () => {
    const { getByTestId } = render(
      <Button data-testid='btn-test'>Click me</Button>
    );

    expect(getByTestId('btn-test')).toBeInTheDocument();
  });

  test('should render Button component default styles correctly', () => {
    const component = rendererCreate(<Button>Click me</Button>).toJSON();

    expect(component).toHaveStyleRule('background-color', 'transparent');
    expect(component).toHaveStyleRule('color', theme.colors.Cod);
  });

  test('should render Button without border', () => {
    const component = rendererCreate(
      <Button borderLess>Click me</Button>
    ).toJSON();

    expect(component).not.toHaveStyleRule(
      'border',
      `1px solid ${theme.colors.Cod}`
    );
  });

  describe('should match the choosen buttonTheme correctly', () => {
    test('should match Negative theme', () => {
      const component = rendererCreate(
        <Button buttonTheme='negative'>Click me</Button>
      ).toJSON();

      expect(component).not.toHaveStyleRule('color', theme.colors.Cod);
    });

    test('should match Green theme', () => {
      const { getByTestId } = render(
        <Button data-testid='btn-test' buttonTheme='Green'>
          Click me
        </Button>
      );

      expect(getByTestId('btn-test')).not.toHaveStyle(
        `border: 1px solid ${theme.colors.Cod}`
      );
    });
  });
});
