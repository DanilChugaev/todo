<template>
  <div class="layout">
    <layout-header class="layout__header"/>

    <layout-container class="layout__container">
      <layout-sidebar class="layout__sidebar"/>

      <layout-main>
        <router-view />
      </layout-main>
    </layout-container>
  </div>
</template>

<script lang="ts">
import LayoutHeader from 'Components/layout/layout-header.vue';
import LayoutContainer from 'Components/layout/layout-container.vue';
import LayoutSidebar from 'Components/layout/layout-sidebar.vue';
import LayoutMain from 'Components/layout/layout-main.vue';

export default {
  name: 'App',

  components: {
    LayoutHeader,
    LayoutContainer,
    LayoutSidebar,
    LayoutMain,
  },
};
</script>

<style lang="stylus">
  @import './common'

  .layout
    display: flex
    flex-direction: column
    height: var(--full-size)

    &__container
      height: var(--full-size)

    &__header
      border-bottom: 1px solid var(--border-color)

    &__sidebar
      border-right: 1px solid var(--border-color)
</style>
