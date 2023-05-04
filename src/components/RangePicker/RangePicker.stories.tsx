import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

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
      options: [0, 1],
      control: { type: 'radio' },
    },
  },
  args: {
    type: 'week',
    weekStart: 0,
    showWeekends: true,
    defaultEndDate: tomorrow,
    defaultStartDate: new Date(),
    onChange: (date) => console.log(date),
  },
  render: (args) => {
    const defaultStartDate = new Date(args.defaultStartDate);
    const defaultEndDate = new Date(args.defaultEndDate);
    const minDate = new Date(args.minDate);
    const maxDate = new Date(args.maxDate);
    return (
      <RangePicker
        {...args}
        defaultEndDate={defaultEndDate}
        defaultStartDate={defaultStartDate}
        minDate={minDate}
        maxDate={maxDate}
      />
    );
  },
};
