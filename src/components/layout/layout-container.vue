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
    width: var(--full-size)

    &__content
      display: flex
      max-width: var(--container-max-width)
      width: var(--full-size)
      height var(--full-size)
      margin: 0 auto
      padding: 0 var(--main-padding)
</style>