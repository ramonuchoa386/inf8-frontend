import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from './';
import theme from '../../../styles/theme';

export default {
  title: 'components/atoms/Avatar',
  component: Avatar,
  argTypes: {
    avatarTheme: {
      name: 'Tema do Avatar',
      description: 'Cor do ícone de Avatar',
      control: 'select',
      options: Object.keys({
        ...theme.colors,
        transparent: 'transparent',
      }).sort(),
      defaultValue: 'transparent',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'transparent' },
      },
    },
    showNotification: {
      name: 'Notificação',
      description: 'Mostrar ícone de notificação no Avatar',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    notificationStatus: {
      name: 'Cor da notificação',
      description: 'Cor do ícone de notificação no Avatar',
      if: { arg: 'showNotification' },
      control: 'radio',
      options: ['Cod', 'positive', 'negative', 'warning'],
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'Cod' },
      },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

export const CustomTheme = Template.bind({});
CustomTheme.args = {
  avatarTheme: 'Mauve',
};

export const DefaultNotification = Template.bind({});
DefaultNotification.args = {
  showNotification: true,
};

export const NotificationColor = Template.bind({});
NotificationColor.args = {
  showNotification: true,
  notificationStatus: 'negative',
};

export const FullCustom = Template.bind({});
FullCustom.args = {
  avatarTheme: 'Coral',
  showNotification: true,
  notificationStatus: 'warning',
};
