<template>
  <span class="ui-color" :style="[ `background-color: ${COLORS[color]}` ]" />
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { UiColor } from '../types';
import { COLORS } from './constants';

defineProps({
  color: {
    type: String as PropType<UiColor>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.ui-color {
  --ui-size: 24px;

  display: inline-block;
  width: var(--ui-size);
  height: var(--ui-size);
  border-radius: var(--border-radius-a);
}
</style>
