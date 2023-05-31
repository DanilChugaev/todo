<template>
  <aside
    :class="[
      'layout-aside',
      {
        'layout-aside--is-active': isActiveAside,
      },
    ]"
  >
    <div class="layout-aside__header">
      <h2 class="layout-aside__title">Aside</h2>

      <ui-button
        class="layout-aside__button"
        :with-bg="false"
        @click="closeAside"
      >
        <icon-close />
      </ui-button>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isActiveAside = ref(true);

function closeAside() {
  isActiveAside.value = false;
}
</script>

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
