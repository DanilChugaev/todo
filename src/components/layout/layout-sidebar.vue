<template>
  <aside class="layout-sidebar">
    layout-sidebar
  </aside>
</template>

<script lang="ts">
export default {
  name: 'layout-sidebar',
};
</script>

<style lang="stylus" scoped>
  .layout-sidebar
    max-width: var(--sidebar-max-width)
    width: var(--full-size)
    padding: var(--main-padding) 0
</style>