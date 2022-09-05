import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ComponentStory } from '@storybook/react';
import { ProSidebar } from 'react-pro-sidebar';
import { MemoryRouter } from 'react-router-dom';
import SidebarHeader from './';
import { Logo } from './../../../assets/logos';

export default {
  title: 'components/molecules/sidebarHeader',
  component: SidebarHeader,
  description: 'Conteúdo do menu',
  argTypes: {
    logo: {
      control: 'text',
      description: 'Caminho do arquivo de imagem',
      defaultValue: Logo,
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
    },
    altImg: {
      control: 'text',
      description: 'Texto alternativo da imagem',
      defaultValue: 'Logo V.tal',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
    },
  },
} as Meta<typeof SidebarHeader>;

const Template: ComponentStory<typeof SidebarHeader> = (args) => (
  <MemoryRouter>
    <ProSidebar>
      <SidebarHeader {...args} />
    </ProSidebar>
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {};
