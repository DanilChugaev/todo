<template>
  <div class="todos">
    <div class="todos__content">
      название списка
      <br>
      id списка = {{ $route.params.id }}
      <br>
      сам список
      {{ value }}
    </div>

    <ui-input
      v-model="value"
      size="small"
      class="todos__new-item"
      @keyup.enter="onEnter"
    />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

import UiInput from 'Components/ui/ui-input.vue';

export default {
  name: 'todos',

  components: {
    UiInput,
  },

  setup() {
    const value = ref();

    function onEnter() {
      console.log(value.value);

      value.value = '';
    }

    return {
      value,
      onEnter,
    };
  },
};
</script>

<style scoped lang="stylus">
  .todos
    --top-page-indent: 60px

    display: flex
    flex-direction: column
    max-width: var(--content-max-width)
    width: var(--full-size)
    height: var(--full-size)
    margin: 0 auto
    padding: var(--top-page-indent) 0

    &__content
      height: var(--full-size)

    &__new-item
      width: var(--full-size)
      margin-top: var(--main-margin)
</style>