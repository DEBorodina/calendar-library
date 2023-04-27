import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { DatePicker } from './index';

const meta: Meta<typeof DatePicker> = {
  title: 'Date Picker',
  component: DatePicker,
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {
  name: 'Month Calendar',
  render: () => (
    <DatePicker
      defaultValue={new Date(Date.now())}
      onChange={(date) => console.log(date)}
    />
  ),
};
