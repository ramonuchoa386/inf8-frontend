import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Sidebar from '.';

export default {
  title: 'components/organisms/Sidebar',
  component: Sidebar,
  parameters: {
    viewport: {
      defaultViewport: 'artboard768',
    },
  },
};

const Template: Story = (args) => <Sidebar {...args} />;

// 👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
