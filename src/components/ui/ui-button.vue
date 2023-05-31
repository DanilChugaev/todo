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

<style>
:root {
  --color-bg-button: var(--color-bg-main);
  --color-bg-button-hover: rgb(235, 235, 235);
  --color-bg-button-active: hsla(220,14%,93%,1);
}
html.dark-mode {
  --color-bg-button: var(--color-bg-main);
  --color-bg-button-hover: #444c56;
  --color-bg-button-active: hsla(213,12%,27%,1);
}
</style>

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
  }

  &:hover {
    background-color: var(--color-bg-button-hover);
  }

  &:active {
    background-color: var(--color-bg-button-active);
  }
}
</style>
