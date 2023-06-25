<template>
  <div class="ui-tasks">
    <ui-button
      class="ui-tasks__new-task"
      size="large"
      icon="plus"
    >
      Add new task
    </ui-button>
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

<style lang="scss" scoped>
.ui-tasks {
  &__new-task {
    width: 100%;
  }
}
</style>
