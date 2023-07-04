import type { Meta, StoryObj } from '@storybook/vue3';
import UiTagsContainer from './ui-tags-container.vue';
import { UiColor } from '../types';

const meta: Meta<typeof UiTagsContainer> = {
  title: 'ui/tags-container',

  component: UiTagsContainer,

  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // @ts-ignore
    items: [
      {
        id: '1',
        title: 'Tag 1',
        color: UiColor.cyan_900,
      },
      {
        id: '2',
        title: 'Tag 2',
        color: UiColor.yellow_500,
      },
    ],
  },
};

export const IsClosing: Story = {
  args: {
    // @ts-ignore
    items: [
      {
        id: '1',
        title: 'Tag 3',
        color: UiColor.red_100,
      },
      {
        id: '2',
        title: 'Tag 4',
        color: UiColor.blueGray_100,
      },
    ],
    isClosing: true,
  },
};

export default meta;
