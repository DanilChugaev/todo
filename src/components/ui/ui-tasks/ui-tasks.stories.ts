import type { Meta, StoryObj } from '@storybook/vue3';

import UiTasks from './index';

const meta: Meta<typeof UiTasks> = {
  title: 'ui/tasks',

  component: UiTasks,

  render: (args: any) => ({
    components: { UiTasks },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 1000px; padding: 20px;">
        <ui-tasks v-bind="args"></ui-tasks>
      </div>
    `,
  }),

  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};
