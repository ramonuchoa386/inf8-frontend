import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import P from '.';
import theme from './../../../styles/theme';

export default {
  title: 'components/atoms/Text/Paragraph',
  component: P,
  description: `PARAGRAPH`,
  argTypes: {
    color: {
      control: 'color',
      description: 'Cor',
      defaultValue: theme.colors.ironside,
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: theme.colors.ironside },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'normal', 'large'],
      defaultValue: 'normal',
      description: 'Tamanho',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'normal' },
      },
    },
    weight: {
      control: 'radio',
      options: ['light', 'normal', 'bold'],
      defaultValue: 'normal',
      description: 'weight',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'normal' },
      },
    },
  },
} as ComponentMeta<typeof P>;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof P> = (args) => (
  <P {...args}>Paragraph 1</P>
);

// 👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};

export const Normal = Template.bind({});
Normal.args = {
  weight: 'normal',
};

export const NormalSmall = Template.bind({});
NormalSmall.args = {
  weight: 'normal',
  size: 'small',
};
export const NormalLarge = Template.bind({});
NormalLarge.args = {
  weight: 'normal',
  size: 'large',
};

export const Bold = Template.bind({});
Bold.args = {
  weight: 'bold',
};

export const BoldCustom = Template.bind({});
BoldCustom.args = {
  color: theme.colors.ironside,
  weight: 'bold',
};
export const BoldSmall = Template.bind({});
BoldSmall.args = {
  weight: 'bold',
  size: 'small',
};
export const BoldLarge = Template.bind({});
BoldLarge.args = {
  weight: 'bold',
  size: 'large',
};
