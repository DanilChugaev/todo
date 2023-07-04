<template>
  <div class="ui-tags-container">
    <ui-tag
      v-for="item in items"
      :key="item.id"
      class="ui-tags-container__item"
      :item="item"
      :isClosing="isClosing"
    />
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { Tag } from '../ui-tag/types';

defineProps({
  items: {
    type: Object as PropType<Tag[]>,
    required: true,
  },
  isClosing: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.ui-tags-container {
  display: inline-flex;
  align-items: center;

  &__item {
    & + .ui-tags-container__item {
      margin-left: var(--spacer-b);
    }
  }
}
</style>
