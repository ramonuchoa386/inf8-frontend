import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/atoms/Button',
  component: Button,
  description: `Botão simples`,
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto',
      defaultValue: 'botão',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'Clique aqui' },
      },
    },
    styledType: {
      options: ['default', 'dark', 'primary', 'white'],
      control: { type: 'radio' },
      description: 'Tipo do botão',
      defaultValue: 'default',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'default' },
      },
    },
    styledSize: {
      options: ['default', 'large', 'medium'],
      control: { type: 'radio' },
      description: 'Tipo do botão',
      defaultValue: 'default',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'default' },
      },
    },
  },
} as ComponentMeta<typeof Button>;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => (
  <MemoryRouter>
    <div
      style={{
        backgroundColor: args.styledType === 'white' ? '#000000' : 'initial',
        paddingBottom: '100%',
      }}
    >
      <Button {...args} />
    </div>
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  styledType: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  styledType: 'primary',
};

export const Dark = Template.bind({});
Dark.args = {
  styledType: 'dark',
};
export const White = Template.bind({});
White.args = {
  styledType: 'white',
};

export const OnClick = Template.bind({});
OnClick.args = {
  onClick: () => alert('Clicked the button!'),
};
