import React from 'react';
import { fireEvent, render, screen } from '../../../utils/test/test-utils';
import ExtendedFilterOptions from '.';
import { act } from 'react-dom/test-utils';

it('Must render a input text field and check its callback', () => {
  const mockFunction = jest.fn((e) => e);
  act(() => {
    render(
      <div data-testid='component'>
        <ExtendedFilterOptions
          params={[
            {
              fieldName: 'testInputField',
              fieldType: 'input',
              placeHolder: 'placeHolderInputField',
              label: 'labelTest',
            },
          ]}
          callBack={(e) => mockFunction(e)}
        />
      </div>
    );
  });
  const component = screen.getByTestId('component');

  const inputElement = component.getElementsByTagName('Input');

  fireEvent.change(inputElement[0], {
    target: { value: 'test' },
  });

  expect(mockFunction).toBeCalled();
  expect(mockFunction).toHaveReturnedWith([
    {
      fieldName: 'testInputField',
      fieldType: 'input',
      placeHolder: 'placeHolderInputField',
      label: 'labelTest',
      value: 'test',
    },
  ]);

  expect(component).toHaveTextContent('labelTest');

  const clearButton = component.getElementsByTagName('Button');

  fireEvent.click(clearButton[0]);

  expect(component).toHaveTextContent('Carregando...');
});

it('Must render a list Component', () => {
  const mockFunction = jest.fn((e) => e);
  act(() => {
    render(
      <div data-testid='component'>
        <ExtendedFilterOptions
          params={[
            {
              fieldName: 'testInputField',
              fieldType: 'list',
              placeHolder: 'placeHolderInputField',
              label: 'labelTest',
              listParams: {
                listItems: ['testDefault', 'test1', 'test2'],
                listItemDefault: 'testDefault',
              },
            },
          ]}
          callBack={(e) => mockFunction(e)}
        />
      </div>
    );
  });
  const component = screen.getByTestId('component');

  const select = component.getElementsByTagName('select');

  fireEvent.change(select[0], { target: { value: 'test1' } });

  expect(mockFunction).toBeCalled();
  expect(mockFunction).toHaveReturnedWith([
    {
      fieldName: 'testInputField',
      fieldType: 'list',
      placeHolder: 'placeHolderInputField',
      label: 'labelTest',
      listParams: {
        listItems: ['testDefault', 'test1', 'test2'],
        listItemDefault: 'testDefault',
      },
      value: 'test1',
    },
  ]);
});
