<template>
  <div class="layout">
    <layout-header class="layout__header"/>

    <layout-container>
      <layout-sidebar class="layout__sidebar"/>

      <router-view />
    </layout-container>
  </div>
</template>

<script lang="ts">
import LayoutHeader from 'Components/layout/layout-header.vue';
import LayoutContainer from 'Components/layout/layout-container.vue';
import LayoutSidebar from 'Components/layout/layout-sidebar.vue';

export default {
  name: 'App',

  components: {
    LayoutHeader,
    LayoutContainer,
    LayoutSidebar,
  },
};
</script>

<style lang="stylus">
  @import './common'

  .layout
    display: flex
    flex-direction: column
    height: var(--full-size)

    &__header
      border-bottom: 1px solid var(--border-color)

    &__sidebar
      border-right: 1px solid var(--border-color)
</style>
