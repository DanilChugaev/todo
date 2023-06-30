import type { Meta, StoryObj } from '@storybook/vue3';

import UiColorContainer from './index';
import { COLORS } from './constants';

const meta = {
  title: 'ui/color',

  component: UiColorContainer,

  argTypes: {
    color: {
      options: Object.keys(COLORS),
      control: 'select',
      defaultValue: 'red_100',
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof UiColorContainer>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'red_100',
  },
};

export default meta;
