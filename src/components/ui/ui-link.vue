<template>
  <router-link
    :class="[
      'ui-link',
      {
        'ui-link--is-active': isActive,
      }
    ]"
    :to="`${$basePath}${to}`"
  >
    <span v-if="hasIconSlot" class="ui-link__icon">
      <slot name="icon"/>
    </span>

    <span>
      <slot />
    </span>

    <span v-if="hasCounterSlot" class="ui-link__counter">
      <slot name="counter" />
    </span>
  </router-link>
</template>

<script lang="ts" setup>
import { useSlots, computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});

const slots = useSlots();
const route = useRoute();

const isActive = computed(() => route.path.split('/').pop() === props.to.split('/').pop());

const hasIconSlot = slots.icon?.()[0].props;
const hasCounterSlot = slots.counter?.()[0].props;
</script>

<style>
:root {
  --color-bg-link-hover: rgb(235, 235, 235);
  --color-bg-link-counter: rgb(235, 235, 235);
  --color-bg-link-counter-hover: var(--color-bg-main);
}
html.dark-mode {
  --color-bg-link-hover: #444c56;
  --color-bg-link-counter: #444c56;
  --color-bg-link-counter-hover: var(--color-bg-main);
}
</style>

<style lang="scss" scoped>
.ui-link {
  display: flex;
  align-items: center;
  padding: var(--spacer-b);
  border-radius: var(--border-radius-b);
  text-decoration: none;
  color: var(--color-text);
  transition: background-color 0.1s ease-in-out;

  &__icon {
    display: flex;
    margin-right: var(--spacer-b);
  }

  &__counter {
    display: flex;
    margin-left: auto;
    padding: var(--spacer-a) var(--spacer-b);
    border-radius: var(--border-radius-a);
    background-color: var(--color-bg-link-counter);
    transition: background-color 0.1s ease-in-out;
  }

  &--is-active {
    font-weight: var(--font-weight-bold);

    .ui-link__counter {
      font-weight: var(--font-weight-normal);
    }
  }

  &--is-active,
  &:hover,
  &:focus {
    background-color: var(--color-bg-link-hover);

    .ui-link__counter {
      background-color: var(--color-bg-link-counter-hover);
    }
  }
}
</style>
