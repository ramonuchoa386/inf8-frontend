import { render } from './../../../utils/test/test-utils';
import Input from './index';

describe('Input component tests', () => {
  test('should render correclty an input component', async () => {
    const { getByRole } = render(<Input />);

    expect(getByRole('textbox')).toBeInTheDocument();
  });
});
