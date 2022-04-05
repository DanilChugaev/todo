<template>
  <input-text
    type="text"
    :class="classes"
    :value="modelValue"
    @input="onInput"
  />
</template>

<script lang="ts">
import { computed, PropType } from 'vue';
import InputText from 'primevue/inputtext';

type InputSize = 'small' | 'normal' | 'size';

export default {
  name: 'ui-input',

  components: {
    InputText,
  },
  
  emits: ['update:modelValue'],

  props: {
      modelValue: {
        type: [String, null],
        default: null,
      },
      size: {
        type: String as PropType<InputSize>,
        default: 'normal',
      },
  },

  setup(props, { emit }) {
    const classes = computed(() => {
      const result = [];

      if (props.size === 'small') {
        result.push('p-inputtext-sm');
      }

      if (props.size === 'large') {
        result.push('p-inputtext-lg');
      }

      return result;
    });

    function onInput(event): void {
      emit('update:modelValue', event.target.value);
    }

    return {
      classes,
      onInput,
    };
  }
};
</script>
