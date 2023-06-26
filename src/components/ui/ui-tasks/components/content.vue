<template>
  <div class="content">
    <div class="content__title">{{ item.title }}</div>

    <ul v-if="hasInfo" class="content__info info">
      <li v-if="item.priority" class="info__item">
        <ui-icon
          class="info__visual"
          name="flag"
          :style="{
            color: item.priority.color,
          }"
        />

        <span class="info__title">{{ item.priority.title }}</span>
      </li>

      <li v-if="item.date" class="info__item">
        <ui-icon class="info__visual info__visual--calendar" name="calendar"/>

        <span class="info__title">{{ item.date }}</span>
      </li>

      <li v-if="item.subtasks?.length" class="info__item">
        <ui-counter class="info__visual info__visual--counter" :counter="item.subtasks.length" />

        <span class="info__title">Subtasks</span>
      </li>

      <li v-if="item.list" class="info__item">
        <!-- тут компонент color-container будет -->
        <span class="info__visual">{{ item.list.color }}</span>

        <span class="info__title">{{ item.list.title }}</span>
      </li>

      <li v-if="item.tags?.length" class="info__item">
        <!-- тут компонент tags-container будет -->
        <span>{{ item.tags }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { Task } from '../types';

const props = defineProps({
  item: {
    type: Object as PropType<Task>,
    required: true,
  },
});

const hasInfo = computed(() =>
  props.item?.priority ||
  props.item?.date ||
  props.item?.subtasks?.length ||
  props.item?.list ||
  props.item?.tags?.length
);
</script>

<style lang="scss" scoped>
.content {
  &__title {
    font-size: var(--font-size-ui-size-large);
    line-height: 26px;
  }

  &__info {
    margin-top: var(--spacer-c);
  }
}

.info {
  display: flex;
  align-items: center;

  &__item {
    display: flex;
    align-items: center;

    & + .info__item {
      margin-left: var(--spacer-c);
      padding-left: var(--spacer-c);
      border-left: 1px solid var(--color-border);
    }
  }

  &__title {
    line-height: 24px;
  }

  &__visual {
    margin-right: var(--spacer-a);

    &--calendar {
      position: relative;
      top: -1px;
    }

    &--counter {
      margin-right: var(--spacer-b);
    }
  }
}
</style>
