<template>
  <main class="layout-main">
    <slot />
  </main>
</template>

<script lang="ts">
export default {
  name: 'layout-main',
};
</script>

<style lang="stylus" scoped>
  .layout-main
    width: var(--full-size)
    padding: var(--main-padding)
</style>