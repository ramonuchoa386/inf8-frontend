import React from 'react';
import { render } from '../../../utils/test/test-utils';
import SendFileFormModal from '.';

describe('SendFileFormModal component test', () => {
  test('should render correctly the component', () => {
    const { getByTestId } = render(
      <SendFileFormModal data-testid='form-test' />
    );

    const component = getByTestId('form-test');

    expect(component).toBeInTheDocument();
  });
});
