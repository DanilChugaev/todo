<template>
  <span
    :class="[
      'ui-counter',
      `ui-counter--${size}`,
    ]"
  >
    {{ counter }}
  </span>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { UiSize } from '../types';

defineProps({
  counter: {
    type: [String, Number],
    required: true,
  },
  size: {
    type: String as PropType<UiSize>,
    default: UiSize.small,
  },
});
</script>

<style lang="scss">
:root {
  --color-bg-ui-counter: rgb(235, 235, 235);
  --color-bg-ui-counter-hover: var(--color-bg-main);
}
html.dark-mode {
  --color-bg-ui-counter: #444c56;
  --color-bg-ui-counter-hover: var(--color-bg-main);
}

.ui-counter {
  --height-ui-size-small: 24px;
  --height-ui-size-medium: 28px;
  --height-ui-size-large: 68px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.1s ease-in-out;

  &--small {
    font-size: 12px;
    height: var(--height-ui-size-small);
    min-width: var(--height-ui-size-small);
    border-radius: var(--border-radius-a);
    background-color: var(--color-bg-ui-counter);
    padding: 0 var(--spacer-a);
  }

  &--medium {
    font-size: 16px;
    height: var(--height-ui-size-medium);
    min-width: var(--height-ui-size-medium);
    border-radius: var(--border-radius-a);
    background-color: var(--color-bg-ui-counter);
    padding: 0 var(--spacer-b);
  }

  &--large {
    font-size: 40px;
    height: var(--height-ui-size-large);
    min-width: var(--height-ui-size-large);
    border-radius: var(--border-radius-b);
    border: 1px solid var(--color-border);
    padding: 0 var(--spacer-c);
  }
}
</style>
