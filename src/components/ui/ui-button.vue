<template>
  <button
    :class="[
      'ui-button',
      {
        'ui-button--with-bg': withBg,
      },
    ]"
    :type="type"
    :disabled="disabled"
  >
    <slot>кнопка</slot>
  </button>
</template>

<script lang="ts" setup>
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
});
</script>

<style scoped lang="scss">
.ui-button {
  padding: var(--spacer-b) var(--spacer-c);
  background: none;
  border: none;
  color: var(--color-text);
  border-radius: var(--border-radius-a);
  cursor: pointer;

  &--with-bg {
    background-color: var(--color-bg-button);
    border: 1px solid var(--color-border);

    &:hover {
      background-color: var(--color-bg-button-hover);
    }

    &:active {
      background-color: var(--color-bg-button-active);
    }
  }
}
</style>
