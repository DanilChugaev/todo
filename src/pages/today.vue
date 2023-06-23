<template>
  <div class="today">
    <layout-header title="Today" :counter="10"/>

    <ui-tasks></ui-tasks>
  </div>
</template>

<script lang="ts" setup>
import LayoutHeader from '~/components/layout/layout-header.vue';
</script>

<style scoped lang="scss">
  .today {}
</style>
