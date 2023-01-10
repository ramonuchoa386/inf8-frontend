import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '.';

export default {
  title: 'components/atoms/Card',
  component: Card,
  description: `Wrapper de card com borda arredondada e sombra`,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>Conteúdo</Card>
);

export const Default = Template.bind({});
