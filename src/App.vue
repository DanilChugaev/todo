<template>
  <div class="layout">
    <layout-header class="layout__header"/>

    <layout-container>
      <router-view />
    </layout-container>
  </div>
</template>

<script lang="ts">
import LayoutHeader from 'Components/layout/layout-header.vue';
import LayoutContainer from 'Components/layout/layout-container.vue';

export default {
  name: 'App',

  components: {
    LayoutHeader,
    LayoutContainer,
  },

  computed: {
    count(): number {
      return this.$store.state.count;
    },
  },

  methods: {
    increment() {
      this.$store.commit('increment');
    }
  }
};
</script>

<style lang="stylus">
  @import './variables'

  *,
  *::before,
  *::after
    margin: 0
    padding: 0
    box-sizing: border-box
    font-family: sans-serif

  html,
  body,
  #app
    height: 100%

  #app
    font-family: Avenir, Helvetica, Arial, 'sans-serif'

  .layout
    display: flex
    flex-direction: column

    &__header
      border-bottom: 1px solid var(--surface-border)
</style>
