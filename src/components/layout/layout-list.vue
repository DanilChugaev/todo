<template>
  <div class="layout-list">
    <h3
      v-if="title"
      class="layout-list__title"
    >
      {{ title }}
    </h3>

    <ul class="layout-list__container">
      <li
        v-for="item in items"
        :key="item.id"
        class="layout-list__item item"
      >
        <ui-link :to="item.to">
          <component
            v-if="item.icon"
            slot="icon"
            :is="item.icon"
            class="item__icon"
          />

          {{ item.text }}

          <span
            v-if="item.counter"
            slot="counter"
            class="item__counter"
          >
            {{ item.counter }}
          </span>
        </ui-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { LayoutListItem } from './types';

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

<style lang="scss" scoped>
.layout-list {
  &__title {

  }

  &__container {

  }

  &__item {

  }

  .item {
    &__icon {

    }
  }
}
</style>
