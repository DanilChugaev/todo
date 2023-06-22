<template>
  <label class="ui-checkbox">
    <input
      class="ui-checkbox__input"
      type="checkbox"
      v-model="model"
      :value="value"
      :disabled="disabled"
    >
    <icon-check class="ui-checkbox__icon" />
  </label>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: { type: [Array, Boolean] },
  value: { type: [Boolean, Object] },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue']);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>

<style>
:root {
  --size-checkbox: 25px;
  --color-checkbox: var(--color-border);
  --color-checkbox-hover: var(--color-border-hover);
  --color-checkbox-focus: var(--color-outline);
}
</style>

<style lang="scss" scoped>
.ui-checkbox {
  display: flex;
  position: relative;
  width: var(--size-checkbox);
  height: var(--size-checkbox);
  border: 1px solid var(--color-checkbox);
  border-radius: var(--border-radius-a);
  cursor: pointer;

  &:hover,
  &:focus {
    --color-checkbox: var(--color-checkbox-hover);
  }

  &:active {
    --color-checkbox: var(--color-checkbox-hover);
  }

  &__icon {
    width: 24px;
    height: 23px;
    border-radius: var(--border-radius-a);
    color: transparent;
  }

  &__input {
    position: absolute;
    appearance: none;

    &:checked + .ui-checkbox__icon {
      color: var(--color-checkbox);
    }

    &:focus + .ui-checkbox__icon {
      --color-checkbox: var(--color-checkbox-hover);
      box-shadow: 0 0 0 3px var(--color-checkbox-focus);
    }
  }
}
</style>
