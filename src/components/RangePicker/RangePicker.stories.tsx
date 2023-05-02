import type { Meta, StoryObj } from '@storybook/react';

import { RangePicker } from './index';

const meta: Meta<typeof RangePicker> = {
  title: 'Range Picker',
  component: RangePicker,
};

export default meta;
type Story = StoryObj<typeof RangePicker>;

const tomorrow = new Date();
tomorrow.setDate(new Date().getDate() + 1);

export const Primary: Story = {
  name: 'Month Calendar',
  argTypes: {
    type: {
      options: ['month', 'week', 'day'],
      control: { type: 'radio' },
    },
    weekStart: {
      options: ['monday', 'sunday'],
      control: { type: 'radio' },
    },
  },
  args: {
    type: 'week',
    weekStart: 'monday',
    showWeekends: true,
    defaultEndDate: tomorrow,
    defaultStartDate: new Date(),
    onChange: (date) => console.log(date),
  },
};
