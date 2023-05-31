import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'icons',

  render: (args: any) => ({
    setup() {
      return { args };
    },

    template: `
      <icon-close></icon-close>
      <icon-menu></icon-menu>
      <icon-moon></icon-moon>
      <icon-settings></icon-settings>
    `,
  }),
} satisfies Meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
