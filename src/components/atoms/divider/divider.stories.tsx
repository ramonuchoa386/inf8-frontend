import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider } from '.';
import theme from '../../../styles/theme';

export default {
  title: 'components/atoms/Divider',
  component: Divider,
  decorators: [
    (Story) => (
      <div style={{ width: '250px' }}>
        <Story />
      </div>
    ),
  ],
  description: `Divider`,
  argTypes: {
    lineColor: {
      name: 'Cor',
      description: 'Cor da linha divisora',
      control: 'select',
      options: Object.keys(theme.colors).sort(),
      defaultValue: 'primary',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: theme.colors.primary },
      },
    },
    withShadow: {
      name: 'Sombreamento',
      description:
        'Atributo booleano que define a presença da sombra na linha divisora',
      control: 'boolean',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const Default = Template.bind({});

export const CustomColor = Template.bind({});
CustomColor.args = {
  lineColor: 'positive',
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  lineColor: 'Coral',
  withShadow: true,
};
