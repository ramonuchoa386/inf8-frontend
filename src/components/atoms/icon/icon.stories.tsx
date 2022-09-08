import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from '.';
import SVGIcons from './../../../assets/icons';

export default {
  title: 'components/atoms/Icon',
  component: Icon,
  description: `Icon`,
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(SVGIcons).sort(),
      description: 'Nome do ícone',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'fulfillment' },
      },
    },
    size: {
      control: 'number',
      description: 'Tamanho do ícone',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 24 },
      },
    },
    color: {
      control: 'color',
      description: 'Cor do ícone',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '#000' },
      },
    },
  },
} as ComponentMeta<typeof Icon>;
// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

// 👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  name: 'KeyOtk',
};

export const OnClick = Template.bind({});
OnClick.args = {
  name: 'KeyOtk',
  onClick: () => alert('Clicked the Icon!'),
};
