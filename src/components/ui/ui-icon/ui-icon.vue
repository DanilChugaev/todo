<template>
  <svg class="ui-icon" viewBox="0 0 24 24">
    <use
      :href="iconPath"
      :xlink-href="iconPath"
    />
  </svg>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { computed } from 'vue';
import sprite from '~/assets/img/sprite.svg';
import { IconTypes } from './types';

const props = defineProps({
  name: {
    type: String as PropType<keyof typeof IconTypes>,
    required: true,
    validator: (v: IconTypes): boolean => Object.values(IconTypes).includes(v),
  },
});

const iconPath = computed<string>(() => `${sprite}#${props.name}`);
</script>

<style>
.ui-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  fill: currentColor;
  flex-shrink: 0;
  font-size: 24px;
}
</style>
