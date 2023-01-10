import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toaster from '.';

export default {
  title: 'components/atoms/Toaster',
  component: Toaster,
  description: `Toaster`,
  decorators: [
    (Story) => (
      <div style={{ width: '350px', height: '250px', position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    withIcon: {
      control: 'boolean',
      name: 'Ícone',
      description: 'O toaster possui ícone?',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    withBtn: {
      control: 'boolean',
      name: 'Botão',
      description: 'O toaster possui botão?',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
} as ComponentMeta<typeof Toaster>;

const Template: ComponentStory<typeof Toaster> = (args) => (
  <Toaster {...args} />
);

export const Default = Template.bind({});

export const CustomToaster = Template.bind({});
CustomToaster.parameters = {};
