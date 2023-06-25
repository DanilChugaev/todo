import type { Meta, StoryObj } from '@storybook/vue3';

import UiButton from './index';
import { UiSize } from '../types';

const meta = {
  title: 'ui/button',

  component: UiButton,

  argTypes: {
    size: {
      options: Object.values(UiSize),
      control: 'select',
      defaultValue: UiSize.medium,
    },
    type: {
      options: ['button', 'submit'],
      control: { type: 'select' },
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },

  render: (args: any) => ({
    components: { UiButton },

    setup() {
      return { args };
    },

    template: '<ui-button v-bind="args" icon="plus">Супер кнопка</ui-button>',
  }),

  tags: ['autodocs'],
} satisfies Meta<typeof UiButton>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Medium: Story = {
  args: {
    size: UiSize.medium,
  }
};
export const Large: Story = {
  args: {
    size: UiSize.large,
  }
};

export const WithIcon: Story = {
  args: {
    icon: 'plus',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export default meta;
