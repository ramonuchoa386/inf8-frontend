import React from 'react';
import { render, fireEvent } from '../../../utils/test/test-utils';
import Toaster from '.';
import ToasterContext from '../../../context/toaster';
import { BiLike } from 'react-icons/bi';

describe('Toaster component tests', () => {
  test('should render a toaster component', () => {
    const { getByTestId } = render(<Toaster data-testid='toaster-test' />);

    const toaster = getByTestId('toaster-test');

    expect(toaster).toBeInTheDocument();
  });

  test('should render a toaster component with a button', () => {
    const { getByRole } = render(<Toaster withBtn />);

    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toBeInstanceOf(HTMLButtonElement);
  });

  test('should render a toaster component with an icon', () => {
    const { getAllByRole } = render(<Toaster withIcon />);

    const icon = getAllByRole('generic')[2];

    expect(icon).toBeInTheDocument();
    expect(icon).toBeInstanceOf(HTMLSpanElement);
  });

  test('should render a toaster component with a button and an icon', () => {
    const { getAllByRole, getByRole } = render(<Toaster withBtn withIcon />);

    const icon = getAllByRole('generic')[2];

    expect(icon).toBeInTheDocument();
    expect(icon).toBeInstanceOf(HTMLSpanElement);

    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toBeInstanceOf(HTMLButtonElement);
  });

  test('should click the button inside the toaster component', () => {
    const { getByRole } = render(<Toaster withBtn withIcon />);
    const button = getByRole('button');
    const mockClick = fireEvent.click(button);

    expect(mockClick).toBeTruthy();
    expect(button).toBeInTheDocument();
    expect(button).toBeInstanceOf(HTMLButtonElement);
  });

  test('should hide after sometime', () => {
    const mockSetState = jest.fn();
    const mockShowToaster = jest.fn();
    const mockHideToaster = jest.fn();

    render(
      <ToasterContext.Provider
        value={{
          setState: mockSetState,
          showToaster: mockShowToaster,
          hideToaster: mockHideToaster,
          toasterState: {
            toast: true,
            severity: 'positive',
            message: 'Toaster tests',
            icon: <BiLike />,
          },
        }}
      >
        <Toaster />
      </ToasterContext.Provider>
    );

    expect(mockShowToaster).toHaveBeenCalledTimes(0);
  });
});
