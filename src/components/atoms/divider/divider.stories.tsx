import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Divider from '.';
import theme from '../../../styles/theme';

export default {
  title: 'components/atoms/Divider',
  component: Divider,
  description: `Divider`,
  argTypes: {
    color: {
      control: 'color',
      defaultValue: theme.colors.primary,
      description: 'cor',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: theme.colors.primary },
      },
    },
    height: {
      control: 'number',
      description: 'Altura',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      defaultValue: 1,
    },
  },
} as ComponentMeta<typeof Divider>;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Divider> = (args) => (
  <div style={{ height: 100, backgroundColor: '#fff' }}>
    <Divider {...args} />
  </div>
);

// 👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: '#F00',
};
