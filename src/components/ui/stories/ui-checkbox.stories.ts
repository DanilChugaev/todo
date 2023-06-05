import type { Meta, StoryObj } from '@storybook/vue3';

import UiCheckbox from '../ui-checkbox.vue';

const meta = {
  title: 'ui/checkbox',

  component: UiCheckbox,

  render: (args: any) => ({
    components: { UiCheckbox },

    setup() {
      return { args };
    },

    template: `
      <div>
        <ui-checkbox v-model="args.value" />
        {{ args.value }}
      </div>
    `,
  }),

  tags: ['autodocs'],
} satisfies Meta<typeof UiCheckbox>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
