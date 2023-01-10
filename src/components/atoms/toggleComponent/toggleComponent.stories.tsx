import * as React from 'react';
import { Meta } from '@storybook/react';
import { ToggleComponent } from '.';
import theme from '../../../styles/theme';

export default {
  title: 'components/atoms/ToggleComponent',
  component: ToggleComponent,
  description: 'Componente boolean',
  argTypes: {
    toggle: {
      name: 'Alterar',
      switchControl: 'boolean',
      description: 'Propriedade que altera o alinhamento do componente',
      defaultValue: false,
      type: { name: 'boolean', required: true },
      switchCable: {
        switchCype: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    switchColor: {
      name: 'Cor',
      control: 'select',
      options: Object.keys(theme.colors).sort(),
      description: 'Cor do componente',
      defaultValue: 'Cod',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'Cod' },
      },
    },
    borderColor: {
      name: 'Cor',
      control: 'select',
      options: Object.keys(theme.colors).sort(),
      description: 'Cor do componente',
      defaultValue: 'Cod',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'Cod' },
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
    theme: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
    forwardedAs: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template = (args) => <ToggleComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  toggle: false,
};

export const ColoredSwitch = Template.bind({});
ColoredSwitch.args = {
  toggle: true,
  switchColor: 'Coral',
};
