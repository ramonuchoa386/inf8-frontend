import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardListItem from './';
import { ApplicationStatusText } from '../../../utils/enums';

export default {
  title: 'components/molecules/CardListItem',
  component: CardListItem,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    title: {
      name: 'Título do Card',
      type: { name: 'string', required: true },
      description: 'Título exibido no topo do Card',
      control: 'text',
      defaultValue: '',
      table: {
        type: {
          summary: 'string',
          required: true,
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    status: {
      name: 'Status',
      description: 'Flag de status exibido no topo do Card',
      control: 'select',
      options: Object.keys(ApplicationStatusText).sort(),
      defaultValue: 'ENABLED',
      type: { name: 'string', required: true },
      table: {
        type: {
          summary: 'enum',
        },
        defaultValue: {
          summary: 'ENABLED',
        },
      },
    },
    meta: {
      name: 'Metadata',
      description: 'Metadados exibidos no topo do Card',
      control: 'object',
      defaultValue: undefined,
      table: {
        type: {
          summary: 'array',
        },
        defaultValue: {
          summary: undefined,
        },
      },
    },
    description: {
      name: 'Descrição do Card',
      type: { name: 'string', required: true },
      description: 'Descrição exibida no meio do Card',
      control: 'text',
      defaultValue: '',
      table: {
        type: {
          summary: 'string',
          required: true,
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    tag: {
      name: 'Tags',
      description: 'Tags exibidas na parte inferior do Card',
      control: 'object',
      defaultValue: undefined,
      table: {
        type: {
          summary: 'array',
        },
        defaultValue: {
          summary: undefined,
        },
      },
    },
    extraIntel: {
      name: 'Mais informações',
      description: 'Mais informações exibidas na parte inferior do Card',
      control: 'object',
      defaultValue: undefined,
      table: {
        type: {
          summary: 'object',
        },
        defaultValue: {
          summary: undefined,
        },
      },
    },
  },
} as ComponentMeta<typeof CardListItem>;

const Template: ComponentStory<typeof CardListItem> = (args) => (
  <div style={{ width: '250px', height: '250px' }}>
    <CardListItem {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Card List Item',
  status: 'ENABLED',
  description:
    'Card List Item with really long text on Description field that takes more than two simple lines.',
};

export const WithMeta = Template.bind({});
WithMeta.args = {
  title: 'Card List Item',
  status: 'ENABLED',
  meta: ['SOAP', 'v1.2.0'],
  description: 'Card List Item Description',
};

export const WithTag = Template.bind({});
WithTag.args = {
  title: 'Card List Item',
  status: 'ENABLED',
  description: 'Card List Item Description',
  tag: ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag1', 'Tag2', 'Tag3', 'Tag4'],
};

export const WithMetaAndTag = Template.bind({});
WithMetaAndTag.args = {
  title: 'Card List Item',
  status: 'ENABLED',
  meta: ['SOAP', 'v1.2.0'],
  description: 'Card List Item Description',
  tag: ['Tag1', 'Tag2'],
};

export const WithIntel = Template.bind({});
WithIntel.args = {
  title: 'Card List Item',
  status: 'ENABLED',
  description: 'Card List Item Description',
  extraIntel: [{ icon: 'BiWindows', intel: 'Intel1' }],
};

export const AllTogether = Template.bind({});
AllTogether.args = {
  title: 'Card List Item',
  meta: ['SOAP', 'v1.2.0'],
  status: 'ENABLED',
  description: 'Card List Item Description',
  tag: ['Tag1', 'Tag2'],
  extraIntel: [
    { icon: 'BiWindows', intel: 'Intel1' },
    { icon: 'BiTime', intel: 'Intel2' },
    { icon: 'BiCalendar', intel: 'Intel3' },
  ],
};
