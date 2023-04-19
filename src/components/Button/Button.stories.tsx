import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    bc: '#3B3B98',
    label: 'Click',
  },
  argTypes: {
    bc: {
      control: { type: 'color' },
    },
  },
};
