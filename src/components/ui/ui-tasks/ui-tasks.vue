<template>
  <div class="ui-tasks">
    <ui-button
      class="ui-tasks__new-task"
      size="large"
      icon="plus"
      @click="$emit('add')"
    >
      Add new task
    </ui-button>

    <ul class="ui-tasks__list list">
      <li
        v-for="item in items"
        :key="item.id"
        class="list__item"
        v-tooltip="item.description"
      >
        <ui-checkbox v-model="item.isCompleted" class="list__checkbox" />

        <content class="list__content" :item="item" />

        <div class="list__actions">
          <ui-button
            class="ui-tasks__action"
            icon="edit"
            v-tooltip="'Редактировать'"
            @click="$emit('edit')"
          />
          
          <ui-button
            class="ui-tasks__action"
            icon="archive"
            v-tooltip="'В архив'"
            @click="$emit('archive')"
          />
          
          <ui-button
            class="ui-tasks__action"
            icon="trash"
            v-tooltip="'Удалить'"
            @click="$emit('delete')"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Task } from './types';
import Content from './components/content.vue';

defineProps({
  items: {
    type: Array as PropType<Task[]>,
    required: true,
  },
});

defineEmits(['add', 'edit', 'archive', 'delete']);

// если таска просрочена то выводить у нее бэйджик что она просрочена
// и предложить сменить дату реализации
</script>

<style lang="scss" scoped>
.ui-tasks {
  &__new-task {
    width: 100%;
  }

  &__action {
    & ::v-deep(.ui-icon) {
      margin: 0;
    }
    & + .ui-tasks__action {
      margin-left: var(--spacer-a);
    }
  }
}

.list {
  &__item {
    display: flex;
    align-items: flex-start;
    position: relative;
    padding: var(--spacer-c) var(--spacer-d);
    cursor: pointer;

    & + .list__item {
      border-top: 1px solid var(--color-border)
    }

    &:hover {
      background-color: var(--color-bg-button-hover);

      & ::v-deep(.ui-counter) {
        background-color: var(--color-bg-ui-counter-hover);
      }

      .list__actions {
        display: flex;
      }
    }
  }

  &__checkbox {
    margin-right: var(--spacer-c);
  }

  &__actions {
    display: none;
    position: absolute;
    right: var(--spacer-d);
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
