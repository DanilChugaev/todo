import type { Meta, StoryObj } from '@storybook/vue3';

import UiColorContainer from './index';
import { COLORS } from './constants';
import { UiColor } from '../types';

const meta = {
  title: 'ui/color',

  component: UiColorContainer,

  argTypes: {
    color: {
      options: Object.keys(COLORS),
      control: 'select',
      defaultValue: UiColor.red_100,
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof UiColorContainer>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: UiColor.red_100,
  },
};

export default meta;
