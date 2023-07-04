import type { Meta, StoryObj } from '@storybook/vue3';
import UiTag from './ui-tag.vue';
import { UiColor } from '../types';

const meta: Meta<typeof UiTag> = {
  title: 'ui/tag',

  component: UiTag,

  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // @ts-ignore
    item: {
      id: '1',
      title: 'Tag 1',
      color: UiColor.brown_900,
    },
  },
};

export const IsClosing: Story = {
  args: {
    // @ts-ignore
    item: {
      id: '2',
      title: 'Tag 2',
      color: UiColor.blue_100,
    },
    isClosing: true,
  },
};

export default meta;
