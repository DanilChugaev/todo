<template>
  <list-wrapper class="ui-list" :title="title">
    <ul class="ui-list__container">
      <li
        v-for="item in items"
        :key="item.id"
        class="ui-list__item item"
      >
        <ui-link
          class="ui-list__link"
          :to="item.to"
          :counter="item.counter"
        >
          <template #icon>
            <ui-icon
              v-if="item.icon"
              :name="item.icon"
              class="item__icon"
            />
          </template>

          {{ item.text }}
        </ui-link>
      </li>
    </ul>
  </list-wrapper>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { UiListItem } from '../types';
import ListWrapper from '../components/list-wrapper.vue';

defineProps({
  title: {
    type: String,
    default: '',
  },
  items: {
    type: Array as PropType<UiListItem[]>,
    required: true,
  },
});
</script>

<style>
:root {
  --height-ui-list-link: 45px;
}
</style>

<style lang="scss" scoped>
.ui-list {
  &__link {
    height: var(--height-ui-list-link);
  }
}
</style>
