import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SendFileFormModal from '.';

export default {
  title: 'components/templates/SendFileFormModal',
  component: SendFileFormModal,
  description: 'Modal com formulário para envio de arquivo',
} as ComponentMeta<typeof SendFileFormModal>;

const Template: ComponentStory<typeof SendFileFormModal> = () => (
  <SendFileFormModal />
);

export const Default = Template.bind({});
