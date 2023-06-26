<template>
  <div class="layout-header">
    <h1 class="layout-header__title">{{ title }}</h1>

    <ui-counter
      v-if="counter"
      class="layout-header__counter"
      size="large"
      :counter="counter"
    />
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
    margin-left: var(--spacer-f);
  }
}
</style>
