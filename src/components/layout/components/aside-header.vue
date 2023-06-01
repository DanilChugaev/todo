<template>
  <div class="aside-header">
    <h2
      v-if="isActiveTitle"
      class="aside-header__title"
    >
      {{ title }}
    </h2>

    <ui-button
      class="aside-header__button"
      :with-bg="false"
      @click="$emit('click')"
    >
      <slot></slot>
    </ui-button>
  </div>
</template>

<script lang="ts" setup>
defineEmits(['click']);

defineProps({
  title: {
    type: String,
    required: true,
  },
  isActiveTitle: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
.aside-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__title {
    font-size: 24px;
  }
}
</style>
