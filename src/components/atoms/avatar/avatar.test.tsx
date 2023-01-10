import {
  render,
  rendererCreate,
  within,
  cleanup,
} from '../../../utils/test/test-utils';
import Avatar from './';
import theme from '../../../styles/theme';

describe('Avatar component test', () => {
  afterAll(cleanup);

  test('should render Avatar component correctly', () => {
    const { getByTestId } = render(<Avatar data-testid='avatar-test' />);

    expect(getByTestId('avatar-test')).toBeInTheDocument();
  });

  test('should render Avatar component default styles correctly', () => {
    const component = rendererCreate(<Avatar />).toJSON();

    expect(component).toHaveStyleRule(
      'border-radius',
      `calc(100 * ${theme.effects.borderRadius})`
    );
    expect(component).toHaveStyleRule(
      'border',
      `1px solid ${theme.colors.Cod}`
    );
    expect(component).toHaveStyleRule('padding', '4px');
  });

  describe('should match the choosen avatarTheme correctly', () => {
    test('should match Mauve theme', () => {
      const component = rendererCreate(<Avatar avatarTheme='Mauve' />).toJSON();

      expect(component).not.toHaveStyleRule(
        'border',
        `1px solid ${theme.colors.Cod}`
      );
      expect(component).toHaveStyleRule(
        'background-color',
        `${theme.colors.Mauve}`
      );
    });

    test('should match Green theme', () => {
      const { getByTestId } = render(
        <Avatar avatarTheme='Green' data-testid='avatar-test' />
      );

      expect(getByTestId('avatar-test')).not.toHaveStyle(
        `border: 1px solid ${theme.colors.Cod}`
      );
      expect(getByTestId('avatar-test')).toHaveStyle(
        `background-color: ${theme.colors.Green}`
      );
    });
  });

  describe('should pass props to avatarTheme correctly', () => {
    test('should show notification element', () => {
      const { getByTestId } = render(
        <Avatar showNotification data-testid='avatar-test' />
      );

      const { getByRole } = within(getByTestId('avatar-test'));

      expect(getByRole('generic')).toBeInTheDocument();
    });
  });
});
