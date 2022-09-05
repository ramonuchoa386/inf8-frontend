import * as React from 'react';
import { Story } from '@storybook/react';
import Header from './';

export default {
  title: 'components/organisms/Header',
  component: Header,
  argTypes: {
    onlyMobile: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: `Renderiza apenas em resoluções menores que 768px`,
    },
  },
  parameters: {
    viewport: {
      defaultViewport: 'artboard768',
    },
  },
};

const Template: Story = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  onlyMobile: false,
};
