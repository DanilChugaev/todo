<template>
  <div>

  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Task } from './types';

defineProps({
  items: {
    type: Array as PropType<Task[]>,
    required: true,
  },
});
</script>

<style scoped>

</style>
