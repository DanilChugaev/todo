<template>
  <header class="layout-header">
    <layout-container>
      <div  class="layout-header__left">
        <router-link to='/'>
          ToDo App
        </router-link>
      </div>

      <div class="layout-header__right">
        переключалка
      </div>
    </layout-container>
  </header>
</template>

<script lang="ts">
import LayoutContainer from 'Components/layout/layout-container.vue';

export default {
  name: 'layout-header',

  components: {
    LayoutContainer,
  },
};
</script>


<style lang="stylus" scoped>
  .layout-header
    display: flex
    align-items: center
    justify-content: center
    height: var(--header-height)

    &__right
      margin-left: auto
</style>