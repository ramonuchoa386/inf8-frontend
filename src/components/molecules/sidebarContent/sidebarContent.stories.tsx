import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ComponentStory } from '@storybook/react';
import { ProSidebar } from 'react-pro-sidebar';
import SidebarContent from './';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/molecules/sidebarContent',
  component: SidebarContent,
  description: 'Conteúdo do menu',
} as Meta<typeof SidebarContent>;

const Template: ComponentStory<typeof SidebarContent> = () => (
  <MemoryRouter>
    <ProSidebar>
      <SidebarContent />
    </ProSidebar>
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {};
