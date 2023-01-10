import { render } from '../../../utils/test/test-utils';
import Tag from '.';
import theme from '../../../styles/theme';

describe('Tag component tests', () => {
  test('should render correctly a single Tag component', () => {
    const { getByTestId } = render(<Tag data-testid='tag'>Content</Tag>);

    expect(getByTestId('tag')).toBeInTheDocument();
  });

  test('should render correctly the Tag component theme', () => {
    const { getByTestId } = render(
      <Tag data-testid='tag' color='positive'>
        Content
      </Tag>
    );

    expect(getByTestId('tag')).toHaveStyle({
      'background-color': theme.colors.positive,
    });
  });

  test('should render correctly the Tag component border color', () => {
    const { getByTestId } = render(
      <Tag data-testid='tag' color='transparent' borderColor='positive'>
        Content
      </Tag>
    );

    expect(getByTestId('tag')).not.toHaveStyle({
      'background-color': theme.colors.Cod,
    });
    expect(getByTestId('tag')).toHaveStyle({
      border: `1px solid ${theme.colors.positive}`,
    });
  });
});
