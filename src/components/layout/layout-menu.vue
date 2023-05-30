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

    <div class="layout-menu__content">
      content
    </div>

    <layout-list
      class="layout-menu__footer"
      :items="footerLinks"
    />
  </aside>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import LayoutList from './layout-list.vue';

const IS_ACTIVE_MENU = 'isActiveMenu';
const isActiveMenu = ref(localStorage.getItem(IS_ACTIVE_MENU) === 'true' ?? true);

const footerLinks = computed(() => [
  {
    text: 'upcoming',
    to: '/',
  },
  {
    text: 'today',
    to: '/today',
  },
  {
    text: 'settings',
    to: '/settings',
    icon: 'icon-settings'
  },
  {
    text: 'about system',
    to: '/settings',
  },
]);

function toggleMenu() {
  isActiveMenu.value = !isActiveMenu.value;

  localStorage.setItem(IS_ACTIVE_MENU, isActiveMenu.value.toString());
}
</script>

<style lang="scss" scoped>
.layout-menu {
  display: flex;
  flex-direction: column;
  padding: var(--spacer-d);
  border-radius: var(--border-radius-c);
  min-width: var(--width-menu-initial);
  height: 100%;

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__title,
  &__content,
  &__footer {
    display: none;
  }

  &__footer {
    margin-top: auto;
  }

  &--is-active {
    background-color: var(--color-bg-menu);
    width: 100%;
    max-width: var(--width-menu-active);

    .layout-menu {
      &__title,
      &__content,
      &__footer {
        display: block;
      }

      &__header {
        justify-content: space-between;
      }
    }
  }
}
</style>
