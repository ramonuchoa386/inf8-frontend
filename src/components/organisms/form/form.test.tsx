import React from 'react';
import { fireEvent, render } from '../../../utils/test/test-utils';
import Form, { FieldType } from '.';

describe('Form Component test', () => {
  describe('Render Test', () => {
    test('should render a Form component', () => {
      const myTestComponent = () => {
        return <div>testeComponent1</div>;
      };

      const fields: FieldType[] = [
        {
          component: myTestComponent(),
        },
      ];

      const form = render(
        <div data-testid={'myForm'}>
          <Form fields={fields} />
        </div>
      );

      const formById = form.getByTestId('myForm');

      expect(formById).toHaveTextContent('testeComponent1');
    });

    test('should fire a event when submit', () => {
      const myTestComponent = () => {
        return <div>testeComponent1</div>;
      };

      const fields: FieldType[] = [
        {
          component: myTestComponent(),
        },
      ];

      const mockFunction = jest.fn();

      const form = render(
        <div data-testid={'myForm'}>
          <Form fields={fields} onSubmit={() => mockFunction()} />
        </div>
      );

      const button = form.getByRole('button', { name: 'Submit' });

      fireEvent.click(button);

      expect(mockFunction).toBeCalled();
    });
  });
});
