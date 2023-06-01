<template>
  <div class="upcoming">
    <layout-header title="Upcoming" :counter="10"/>

    <layout-task-container title="Today">
      таски
    </layout-task-container>
  </div>
</template>

<script lang="ts" setup>
import LayoutHeader from '~/components/layout/layout-header.vue';
import LayoutTaskContainer from '~/components/layout/layout-task-container.vue';
</script>

<style scoped lang="scss">
  .upcoming {}
</style>
