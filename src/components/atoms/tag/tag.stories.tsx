import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag from '.';
import theme from '../../../styles/theme';

export default {
  title: 'components/atoms/Tag',
  component: Tag,
  description: `Status da aplicação com bullet indicador`,
  argTypes: {
    color: {
      control: 'select',
      name: 'Cor de fundo',
      description: 'Cor de fundo da tag',
      options: Object.keys({
        ...theme.colors,
        transparent: 'transparent',
      }).sort(),
      defaultValue: 'Cod',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'Cod' },
      },
    },
    borderColor: {
      control: 'select',
      name: 'Cor da borda',
      description: 'Cor da borda da tag',
      options: Object.keys({
        ...theme.colors,
        transparent: 'transparent',
      }).sort(),
      defaultValue: '',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
    },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => (
  <Tag {...args}>API Hub</Tag>
);

export const Default = Template.bind({});
