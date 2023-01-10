import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Status from '.';
import { ApplicationStatusText } from '../../../utils/enums';

export default {
  title: 'components/atoms/Status',
  component: Status,
  description: `Status da aplicação com bullet indicador`,
  argTypes: {
    status: {
      control: 'select',
      description: 'Status da aplicação',
      options: Object.keys(ApplicationStatusText).sort(),
      defaultValue: 'ENABLED',
      table: {
        type: { summary: 'StatusType', required: true },
        defaultValue: { summary: 'ENABLED' },
      },
    },
    size: {
      control: 'select',
      options: ['short', 'big'],
      description: 'Tamanho do indicador',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'short' },
      },
    },
  },
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = (args) => <Status {...args} />;

export const Default = Template.bind({});

export const Big = Template.bind({});
Big.args = {
  size: 'big',
  status: 'DEPRECATED',
};
