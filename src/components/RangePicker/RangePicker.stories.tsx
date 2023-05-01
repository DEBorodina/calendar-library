import type { Meta, StoryObj } from '@storybook/react';

import { RangePicker } from './index';

const meta: Meta<typeof RangePicker> = {
  title: 'Range Picker',
  component: RangePicker,
};

export default meta;
type Story = StoryObj<typeof RangePicker>;

const tomorrow = new Date();
tomorrow.setDate(new Date().getDate() + 4);

export const Primary: Story = {
  name: 'Month Calendar',
  argTypes: {},
  args: {
    defaultEndDate: tomorrow,
    onChange: (date) => console.log(date),
  },
};
