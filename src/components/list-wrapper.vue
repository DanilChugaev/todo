<template>
  <div class="list-wrapper">
    <h3
      v-if="title"
      class="list-wrapper__title"
    >
      {{ title }}
    </h3>

    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.list-wrapper {
  &__title {
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: var(--spacer-c);
  }
}
</style>
