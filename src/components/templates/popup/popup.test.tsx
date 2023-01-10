import { render } from '../../../utils/test/test-utils';
import PopUp from '.';

describe('PopUp component tests', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<PopUp data-testid='popup-tests' />);

    expect(getByTestId('popup-tests')).toBeInTheDocument();
    expect(getByTestId('popup-tests')).toHaveStyle({
      display: 'none',
      'align-items': 'center',
      'justify-content': 'center',
      'background-color': '#19191877',
    });
  });
});
