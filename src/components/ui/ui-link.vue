<template>
  <router-link
    class="ui-link"
    :to="$basePath + to"
  >
    <slot name="icon" />

    <span>
      <slot />
    </span>

    <slot name="counter" />
  </router-link>
</template>

<script lang="ts" setup>
defineProps({
  to: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.ui-link {

}
</style>
