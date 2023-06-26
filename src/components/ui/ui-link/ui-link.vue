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

    <ui-counter
      v-if="counter"
      class="ui-link__counter"
      size="medium"
      :counter="counter"
    />
  </router-link>
</template>

<script lang="ts" setup>
import { useSlots, computed, PropType } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  counter: {
    type: [Number, undefined] as PropType<number | undefined>,
    default: undefined,
  },
});

const slots = useSlots();
const route = useRoute();

const isActive = computed(() => route.path.split('/').pop() === props.to.split('/').pop());

const hasIconSlot = slots.icon?.()[0].props;
</script>

<style>
:root {
  --color-bg-link-hover: rgb(235, 235, 235);
}
html.dark-mode {
  --color-bg-link-hover: #444c56;
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
    margin-left: auto;
  }

  &--is-active {
    font-weight: var(--font-weight-bold);

    .ui-counter {
      font-weight: var(--font-weight-normal);
    }
  }

  &--is-active,
  &:hover,
  &:focus {
    background-color: var(--color-bg-link-hover);

    .ui-counter {
      background-color: var(--color-bg-ui-counter-hover);
    }
  }
}
</style>
