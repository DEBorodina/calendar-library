import type { Meta, StoryObj } from '@storybook/react';

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
  },
  args: {
    type: 'week',
    weekStart: 1,
    showWeekends: true,
    defaultValue: new Date(2023, 4, 5),
    minDate: new Date(2023, 4, 1),
    maxDate: new Date(2023, 4, 7),
    withToDoList: true,
    onChange: (date) => {
      console.log('onchange', date);
    },
  },
};
