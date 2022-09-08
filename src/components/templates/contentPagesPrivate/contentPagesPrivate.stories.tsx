import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContentPagesPrivate from '.';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/templates/ContentPagesPrivate',
  component: ContentPagesPrivate,
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
} as ComponentMeta<typeof ContentPagesPrivate>;
// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ContentPagesPrivate> = (args) => (
  <MemoryRouter>
    <ContentPagesPrivate {...args}>Content</ContentPagesPrivate>
  </MemoryRouter>
);

// 👇 Each story then reuses that template
export const Default = Template.bind({});
