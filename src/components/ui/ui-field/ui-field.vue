<template>
  <div class="ui-field">
    <component :is="(tag as string)"
      v-if="title"
      class="ui-field__title"
    >
      {{ title }}
    </component>

    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  tag: {
    type: String,
    default: 'h3',
  },
});
</script>

<style lang="scss" scoped>
.ui-field {
  &__title {
    font-size: 18px;
    margin-bottom: var(--spacer-c);
  }
}
</style>
