import type { Meta, StoryObj } from '@storybook/vue3';

import UiCounter from './index';
import { UiSize } from '../types';

const meta = {
  title: 'ui/counter',

  component: UiCounter,

  argTypes: {
    size: {
      options: Object.values(UiSize),
      control: 'select',
      defaultValue: UiSize.medium,
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof UiCounter>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    counter: '1',
  },
};

export const Medium: Story = {
  args: {
    size: UiSize.medium,
    counter: 12,
  },
};
export const Large: Story = {
  args: {
    size: UiSize.large,
    counter: 354,
  },
};

export default meta;
