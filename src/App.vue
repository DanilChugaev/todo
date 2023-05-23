<template>
  <div class="app">
    <layout-menu />

    <main class="app__main">
      <router-view />
    </main>

    <layout-aside />
  </div>
</template>

<script lang="ts" setup>
import LayoutAside from '~/components/layout/layout-aside.vue';
import LayoutMenu from '~/components/layout/layout-menu.vue';
</script>

<style lang="scss">
@import "./assets/scss/index.scss";

.app {
  display: flex;
  height: 100%;
  gap: var(--spacer-d);
  padding: var(--spacer-d);

  &__main {
    width: 100%;
    padding: var(--spacer-d) 0;
  }
}
</style>
