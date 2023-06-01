<template>
  <aside
    :class="[
      'layout-menu',
      {
        'layout-menu--is-active': isActiveMenu,
      },
    ]"
  >
    <aside-header
      title="Menu"
      :is-active-title="isActiveMenu"
      @click="toggleMenu"
    >
      <icon-menu />
    </aside-header>

    <div class="layout-menu__content">
      <ui-list
        class="layout-menu__list"
        title="tasks"
        :items="tasksLinks"
      />
    </div>

    <div class="layout-menu__footer">
      <ui-list
        class="layout-menu__list"
        :items="footerLinks"
      />
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import UiList from '~/components/ui/ui-list.vue';
import AsideHeader from './components/aside-header.vue';

const IS_ACTIVE_MENU = 'isActiveMenu';
const isActiveMenu = ref(localStorage.getItem(IS_ACTIVE_MENU) === 'true' ?? true);

const tasksLinks = computed(() => [
  {
    text: 'Upcoming',
    to: '/',
  },
  {
    text: 'Today',
    to: '/today',
    counter: 12,
  },
]);
const footerLinks = computed(() => [
  {
    text: 'Settings',
    to: '/settings',
    icon: 'icon-settings',
  },
  {
    text: 'Info',
    to: '/Info',
    icon: 'icon-info',
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

  &__content {
    margin-top: var(--spacer-d);
  }

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
