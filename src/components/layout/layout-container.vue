<template>
  <div class="layout-container">
    <div class="layout-container__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'layout-container',
};
</script>


<style lang="stylus" scoped>
  .layout-container
    width: 100%

    &__content
      display: flex
      max-width: 1400px
      width: 100%
      margin: 0 auto
      padding: 0 var(--main-padding)
</style>