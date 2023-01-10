import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import theme from '../../../styles/theme';
import Button from '.';
import { BoxIconsLib } from '../';

export default {
  title: 'components/atoms/Button',
  component: Button,
  description: `Botão simples`,
  argTypes: {
    buttonTheme: {
      name: 'Tema do botão',
      description: 'Cor do botão',
      options: Object.keys(theme.colors).sort(),
      control: 'select',
      defaultValue: 'Cod',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'Cod' },
      },
    },
    borderLess: {
      name: 'Sem borda',
      control: 'boolean',
      description: 'Atributo booleano que define a presença da borda no botão.',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>API Hub</Button>
);

const WithIconTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    API Hub <BoxIconsLib />
  </Button>
);

export const Default = Template.bind({});

export const Colored = Template.bind({});
Colored.parameters = {
  backgrounds: { default: 'dark' },
};
Colored.args = {
  buttonTheme: 'primary',
};

export const Borderless = Template.bind({});
Borderless.args = {
  borderLess: true,
};

export const CustomClickFunction = Template.bind({});
CustomClickFunction.args = {
  onClick: () => alert('Clicked the button!'),
};

export const WithIcon = WithIconTemplate.bind({});
