<template>
  <aside
    :class="[
      'layout-menu',
      {
        'layout-menu--is-active': isActiveMenu,
      },
    ]"
  >
    <div class="layout-menu__header">
      <h2 class="layout-menu__title">Menu</h2>

      <ui-button
        class="layout-menu__button"
        :with-bg="false"
        @click="toggleMenu"
      >
        <icon-menu />
      </ui-button>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import IconMenu from '~/components/ui/icons/menu.vue';
import UiButton from '~/components/ui/ui-button.vue';

const IS_ACTIVE_MENU = 'isActiveMenu';
const isActiveMenu = ref(localStorage.getItem(IS_ACTIVE_MENU) === 'true' ?? true);

function toggleMenu() {
  isActiveMenu.value = !isActiveMenu.value;

  localStorage.setItem(IS_ACTIVE_MENU, isActiveMenu.value.toString());
}
</script>

<style lang="scss" scoped>
.layout-menu {
  padding: var(--spacer-d);
  border-radius: var(--border-radius-c);
  min-width: var(--width-menu-initial);
  height: 100%;

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__title {
    display: none;
  }

  &--is-active {
    background-color: var(--color-bg-menu);
    width: 100%;
    max-width: var(--width-menu-active);

    .layout-menu__title {
      display: block;
    }

    .layout-menu__header {
      justify-content: space-between;
    }
  }
}
</style>
