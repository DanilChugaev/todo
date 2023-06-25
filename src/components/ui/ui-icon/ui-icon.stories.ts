import type { Meta, StoryObj } from '@storybook/vue3';
import { IconTypes } from './types';
import UiIcon from './ui-icon.vue';

const meta: Meta<typeof UiIcon> = {
  title: 'ui/icon',

  render: () => ({
    components: { UiIcon },

    setup() {
      return { IconTypes };
    },

    template: `
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 30px;">
        <UiIcon
            v-for="icon in IconTypes"
            :name="icon"
        />
      </div>
    `,
  }),
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
