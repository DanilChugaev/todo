<template>
  <div class="layout-task-container">
    <h4 class="layout-task-container__title">{{ title }}</h4>

    <div class="layout-task-container__list">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.layout-task-container {
  padding: var(--spacer-d);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-b);

  &__title {
    margin-bottom: var(--spacer-d);
  }
}
</style>
