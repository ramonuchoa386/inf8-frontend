import React from 'react';
import { render } from '../../../utils/test/test-utils';

import Login from '.';

describe('Login page test', () => {
  test('should match snapshot', () => {
    const page = render(<Login />);

    expect(page).toMatchSnapshot();
  });

  // test('should submit form', () => {
  //   const { getByPlaceholderText, getAllByRole } = render(<Login />);

  //   const userInput = getByPlaceholderText('Usuário');
  //   const passInput = getByPlaceholderText('Senha');
  //   const btnList = getAllByRole('button');

  //   fireEvent.change(userInput, { target: { value: 'portalAdmin' } });
  //   fireEvent.change(passInput, { target: { value: 'Password@1' } });
  //   fireEvent.click(btnList[0]);
  // });
});
