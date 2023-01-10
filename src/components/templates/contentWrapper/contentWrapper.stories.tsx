import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContentWrapper from '.';

export default {
  title: 'components/templates/ContentWrapper',
  component: ContentWrapper,
  description: `Content Template`,
  argTypes: {
    pageTitle: {
      type: { name: 'string', required: true },
      description: 'Page Title',
      defaultValue: 'Page Title',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'Page Title' },
      },
    },
    children: {
      type: { name: 'string', required: true },
      description: 'Children, pode adicionar qualquer informação',
      defaultValue: 'Informações',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: null },
      },
    },
  },
} as ComponentMeta<typeof ContentWrapper>;
// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ContentWrapper> = (args) => (
  <ContentWrapper {...args}>Content</ContentWrapper>
);

// 👇 Each story then reuses that template
export const Default = Template.bind({});
