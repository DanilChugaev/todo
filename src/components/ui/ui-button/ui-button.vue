<template>
  <button
    :class="[
      'ui-button',
      {
        'ui-button--with-bg': withBg,
      },
      `ui-button--size-${size}`
    ]"
    :type="type"
    :disabled="disabled"
  >
    <ui-icon v-if="icon" class="ui-button__icon" :name="icon"/>

    <slot v-if="$slots.default" class="ui-button__content"></slot>
  </button>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { UiSize } from '~/components/ui/types';
import { IconTypes } from '~/components/ui/ui-icon/types';

defineProps({
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  withBg: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String as PropType<UiSize>,
    default: UiSize.small,
  },
  icon: {
    type: String as PropType<IconTypes>,
    default: '',
  },
});
</script>

<style>
:root {
  --color-bg-button: var(--color-bg-main);
  --color-bg-button-hover: rgb(235, 235, 235);
  --color-bg-button-active: hsl(225, 6%, 87%);
}
html.dark-mode {
  --color-bg-button: var(--color-bg-main);
  --color-bg-button-hover: #444c56;
  --color-bg-button-active: hsla(213,12%,27%,1);
}
</style>

<style scoped lang="scss">
.ui-button {
  --font-size-icon-increase: 4px;

  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;

  &--with-bg {
    background-color: var(--color-bg-button);
    border: 1px solid var(--color-border);
  }

  &--size-small {
    font-size: var(--font-size-ui-size-small);
    height: var(--height-ui-size-small);
    padding: var(--spacer-a) var(--spacer-b);
    border-radius: var(--border-radius-a);

    .ui-button__icon {
      margin-right: var(--spacer-a);
    }

    .ui-icon {
      font-size: calc(var(--font-size-ui-size-small) + var(--font-size-icon-increase));
    }
  }

  &--size-medium {
    font-size: var(--font-size-ui-size-medium);
    height: var(--height-ui-size-medium);
    padding: var(--spacer-b) var(--spacer-c);
    border-radius: var(--border-radius-a);

    .ui-button__icon {
      margin-right: var(--spacer-b);
    }

    .ui-icon {
      font-size: calc(var(--font-size-ui-size-medium) + var(--font-size-icon-increase));
    }
  }

  &--size-large {
    font-size: var(--font-size-ui-size-large);
    height: var(--height-ui-size-large);
    padding: var(--spacer-c) var(--spacer-d);
    border-radius: var(--border-radius-b);

    .ui-button__icon {
      margin-right: var(--spacer-c);
    }

    .ui-icon {
      font-size: calc(var(--font-size-ui-size-large) + var(--font-size-icon-increase));
    }
  }

  &:hover {
    background-color: var(--color-bg-button-hover);
  }

  &:active {
    background-color: var(--color-bg-button-active);
  }
}
</style>
