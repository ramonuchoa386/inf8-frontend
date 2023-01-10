import * as React from 'react';
import { Meta } from '@storybook/react';
import Input from './';
import theme from '../../../styles/theme';
import { iconLibOptions } from '../icon/icon.stories';

export default {
  title: 'components/atoms/Input',
  component: Input,
  description: `Input simples`,
  argTypes: {
    inputTheme: {
      name: 'Cor do campo de texto',
      description: 'Cor base do campo de texto',
      control: 'select',
      options: Object.keys(theme.colors).sort(),
      table: {
        type: { summary: 'ColorPallete' },
        defaultValue: { summary: 'Cod' },
      },
    },
    label: {
      name: 'Rótulo',
      description: 'Rótulo do campo de texto',
      control: 'text',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
    },
    iconName: {
      name: 'Ícone',
      control: 'select',
      options: Object.values(iconLibOptions),
      mapping: iconLibOptions,
      description: 'Nome do ícone',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'BiAbacus' },
      },
    },
  },
} as Meta;

const Template = (args) => <Input {...args}></Input>;

export const Default = Template.bind({});

export const Custom = Template.bind({});
Custom.args = {
  label: 'My awesome label',
  inputTheme: 'Mauve',
};

export const InvalidState = Template.bind({});
InvalidState.parameters = {
  decorators: [
    (Story) => (
      <form>
        <Story />
      </form>
    ),
  ],
};
InvalidState.args = {
  label: 'Type some content',
  inputTheme: 'positive',
  required: true,
};
