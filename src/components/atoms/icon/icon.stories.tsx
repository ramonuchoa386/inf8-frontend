import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as BoxIcons from 'react-icons/bi';
import Icon from './';
import SVGIcons from '../../../assets/icons';
import theme from '../../../styles/theme';

export const iconLibOptions = {
  ...Object.keys(BoxIcons),
  ...Object.keys(SVGIcons),
};

export default {
  title: 'components/atoms/Icons',
  component: Icon,
  description: `Icon`,
  argTypes: {
    iconName: {
      name: 'Ícone',
      control: 'select',
      options: Object.values(iconLibOptions),
      mapping: iconLibOptions,
      description: 'Nome do ícone',
      type: { name: 'string', required: false },
      defaultValue: 'BiAbacus',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'BiAbacus' },
      },
    },
    size: {
      name: 'Tamanho',
      control: 'text',
      description: 'Tamanho do ícone',
      type: { name: 'string', required: false },
      defaultValue: '12px',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '12px' },
      },
    },
    color: {
      name: 'Cor',
      control: 'select',
      options: Object.keys(theme.colors).sort(),
      description: 'Cor do ícone',
      type: { name: 'string', required: false },
      defaultValue: 'Cod',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Cod' },
      },
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
