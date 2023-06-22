<template>
  <aside
    :class="[
      'layout-aside',
      {
        'layout-aside--is-active': isActiveAside,
      },
    ]"
  >
    <aside-header title="Aside" @click="closeAside">
      <icon-close />
    </aside-header>
  </aside>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AsideHeader from './components/aside-header.vue';

const isActiveAside = ref(true);

function closeAside() {
  isActiveAside.value = false;
}
</script>

<style>
:root {
  --width-aside-active: 600px;
  --width-aside-initial: 0;
}
</style>

<style scoped lang="scss">
.layout-aside {
  display: none;
  padding: var(--spacer-d);
  border-radius: var(--border-radius-c);
  background-color: var(--color-bg-aside);
  width: 100%;
  max-width: var(--width-aside-active);
  height: 100%;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-size: 24px;
  }

  &--is-active {
    display: block;
  }
}
</style>
