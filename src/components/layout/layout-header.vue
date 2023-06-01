<template>
  <div class="layout-header">
    <h1 class="layout-header__title">{{ title }}</h1>

    <span v-if="counter" class="layout-header__counter">
      {{ counter }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  counter: {
    type: [Number, undefined] as PropType<number | undefined>,
    default: undefined,
  },
});
</script>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  align-items: baseline;
  margin-bottom: var(--spacer-f);

  &__title {
    font-size: 48px;
  }

  &__counter {
    font-size: 40px;
    padding: var(--spacer-b);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-b);
    margin-left: var(--spacer-f);
  }
}
</style>
