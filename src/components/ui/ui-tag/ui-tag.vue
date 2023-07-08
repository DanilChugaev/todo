<template>
  <div
    :class="[
      'ui-tag',
      {
        'ui-tag--is-closing': isClosing
      },
    ]"
    :style="`background-color: ${COLORS[item.color]}`"
  >
    <span class="ui-tag__title">{{ item.title }}</span>

    <ui-button
      v-if="isClosing"
      class="ui-tag__button"
      icon="close"
      :with-bg="false"
      @click="$emit('close')"
    />
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { Tag } from './types';
import { COLORS } from '~/components/ui/ui-color-container/constants';

defineProps({
  item: {
    type: Object as PropType<Tag>,
    required: true,
  },
  isClosing: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.ui-tag {
  display: inline-flex;
  align-items: center;
  height: var(--ui-size);
  padding: var(--spacer-a) var(--spacer-b);
  border-radius: var(--border-radius-a);
  font-size: var(--font-size-ui-size-small);

  &__title {
    color: var(--color-white);
    mix-blend-mode: difference;
  }

  .ui-button {
    justify-content: center;
    padding: 0;
    width: var(--ui-size);
    height: var(--ui-size);
    margin-left: var(--spacer-a);
    border-top-left-radius: initial;
    border-bottom-left-radius: initial;

    ::v-deep(.ui-icon) {
      margin: 0;
    }
  }

  &--is-closing {
    padding: var(--spacer-a) 0 var(--spacer-a) var(--spacer-b);
  }
}
</style>
