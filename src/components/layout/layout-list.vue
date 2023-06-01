<template>
  <list-wrapper class="layout-list" :title="title">
    <ul class="layout-list__container">
      <li
        v-for="item in items"
        :key="item.id"
        class="layout-list__item item"
      >
        <ui-link class="layout-list__link" :to="item.to">
          <template #icon>
            <component
              v-if="item.icon"
              :is="item.icon"
              class="item__icon"
            />
          </template>

          {{ item.text }}

          <template #counter>
            <span
              v-if="item.counter"
              class="item__counter"
            >
              {{ item.counter }}
            </span>
          </template>
        </ui-link>
      </li>
    </ul>
  </list-wrapper>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { LayoutListItem } from './types';
import ListWrapper from '~/components/list-wrapper.vue';

defineProps({
  title: {
    type: String,
    default: '',
  },
  items: {
    type: Array as PropType<LayoutListItem[]>,
    required: true,
  },
});
</script>

<style>
:root {
  --height-layout-list-link: 45px;
}
</style>

<style lang="scss" scoped>
.layout-list {
  &__title {

  }

  &__container {

  }

  &__item {

  }

  &__link {
    height: var(--height-layout-list-link);
  }

  .item {
    list-style: none;

    &__icon {

    }

    &__counter {

    }
  }
}
</style>
