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
  argTypes: {
    type: {
      options: ['month', 'week', 'day'],
      control: { type: 'radio' },
    },
    weekStart: {
      options: [1, 0],
      control: { type: 'radio' },
    },
    defaultValue: {
      control: { type: 'date' },
    },
    endDate: {
      table: {
        disable: true,
      },
    },
    startDate: {
      table: {
        disable: true,
      },
    },
  },

  args: {
    type: 'week',
    weekStart: 1,
    showWeekends: true,
    defaultValue: new Date(2023, 4, 5),
    minDate: new Date(2023, 4, 1),
    maxDate: new Date(2023, 4, 7),
    holidays: [new Date(2023, 4, 9)],
    withToDoList: true,
    onChange: (date) => {
      console.log('onchange', date);
    },
  },

  render: (args) => {
    const defaultValue = new Date(args.defaultValue);
    const minDate = new Date(args.minDate);
    const maxDate = new Date(args.maxDate);
    return (
      <DatePicker
        {...args}
        defaultValue={defaultValue}
        minDate={minDate}
        maxDate={maxDate}
      />
    );
  },
};
