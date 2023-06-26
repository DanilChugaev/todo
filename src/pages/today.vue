<template>
  <div class="today">
    <layout-header title="Today" :counter="10"/>

    <ui-tasks :items="items"></ui-tasks>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import LayoutHeader from '~/components/layout/layout-header.vue';
import { PriorityColor, PriorityLevel } from '~/components/ui/ui-tasks/types';

const items = computed(() => [
  {
    id: 1,
    title: 'Research content ideas',
    isCompleted: false,
    description: undefined,
    list: undefined,
    tags: undefined,
    date: undefined,
    subtasks: undefined,
    priority: {
      id: PriorityLevel.low,
      title: PriorityLevel.low,
      color: PriorityColor[PriorityLevel.low],
    },
  },
  {
    id: 2,
    title: 'Create a database of guest authors',
    isCompleted: false,
    description: 'lorem ipsum la la la',
    list: undefined,
    tags: undefined,
    date: undefined,
    subtasks: undefined,
    priority: undefined,
  },
  {
    id: 3,
    title: 'Renew drivers license',
    isCompleted: false,
    description: 'lorem ipsum',
    list: {
      id: 1,
      title: 'Home',
      color: 'rgb(107,137,255)'
    },
    tags: undefined,
    date: '22-09-23',
    subtasks: [
      {
        id: 1,
        title: 'subtask 1',
        isCompleted: false,
      },
      {
        id: 2,
        title: 'subtask 2',
        isCompleted: false,
      },
      {
        id: 3,
        title: 'subtask 3',
        isCompleted: false,
      },
    ],
    priority: {
      id: PriorityLevel.high,
      title: PriorityLevel.high,
      color: PriorityColor[PriorityLevel.high],
    },
  },
  {
    id: 4,
    title: 'Consult accountant',
    isCompleted: false,
    description: 'lorem ipsum',
    list: {
      id: 2,
      title: 'Work',
      color: 'rgb(255, 107, 107)'
    },
    tags: [
      {
        id: 1,
        title: 'Tag 1',
        color: 'rgb(107,255,119)'
      },
    ],
    date: undefined,
    subtasks: [
      {
        id: 1,
        title: 'subtask 1',
        isCompleted: false,
      },
    ],
  },
  {
    id: 5,
    title: 'Other todo',
    isCompleted: true,
    description: 'lorem ipsum',
    list: {
      id: 2,
      title: 'Work',
      color: 'rgb(255, 107, 107)'
    },
    tags: [
      {
        id: 1,
        title: 'Tag 1',
        color: 'rgb(107,255,119)'
      },
      {
        id: 2,
        title: 'Tag 2',
        color: 'rgb(213,107,255)'
      },
    ],
    date: '22-09-23',
    subtasks: [
      {
        id: 1,
        title: 'subtask 1',
        isCompleted: false,
      },
    ],
    priority: {
      id: PriorityLevel.normal,
      title: PriorityLevel.normal,
      color: PriorityColor[PriorityLevel.normal],
    },
  },
  {
    id: 6,
    title: 'Research',
    isCompleted: false,
    description: undefined,
    list: undefined,
    tags: undefined,
    date: undefined,
    subtasks: undefined,
    priority: {
      id: PriorityLevel.urgent,
      title: PriorityLevel.urgent,
      color: PriorityColor[PriorityLevel.urgent],
    },
  },
]);
</script>

<style scoped lang="scss">
  .today {}
</style>
