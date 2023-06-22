import type { Meta, StoryObj } from '@storybook/vue3';

import UiLink from './ui-link.vue';

const meta = {
  title: 'ui/link',

  component: UiLink,

  argTypes: {
    to: {
      control: {
        type: 'text',
      },
      defaultValue: '/test'
    },
  },

  render: (args: any) => ({
    components: { UiLink },

    setup() {
      return { args };
    },

    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; max-width: 300px">
        <ui-link v-bind="args">${args.default}</ui-link>
        <ui-link v-bind="args">
          <template #icon>
            <icon-close></icon-close>
          </template>
          
          ${args.default}
        </ui-link>
      </div>
    `,
  }),

  tags: ['autodocs'],
} satisfies Meta<typeof UiLink>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: 'Ссылка',
  },
};

export const Disabled: Story = {
  args: {
    default: 'Ссылка',
  },
};

export default meta;
