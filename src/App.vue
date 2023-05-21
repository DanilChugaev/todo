<template>
  <div class="app-container">
    <layout-menu />

    <router-view />

    <layout-aside />
  </div>
</template>

<script lang="ts">
import LayoutAside from '~/components/layout/layout-aside.vue';
import LayoutMenu from '~/components/layout/layout-menu.vue';

export default {
  name: 'App',

  components: {
    LayoutAside,
    LayoutMenu,
  },

  setup() {

    return {};
  },
};
</script>

<style lang="scss">
@import "./assets/scss/index.scss";

.app-container {
  padding: var(--spacer-d);
}
</style>
