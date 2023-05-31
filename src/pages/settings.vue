<template>
  <div class="settings">
    <ui-switch v-model="isDark" @change="toggleDarkMode"/>
  </div>
</template>

<script lang="ts" setup>
import { inject, ref, onMounted } from 'vue';

const toggleDarkMode = inject('toggleDarkMode');
const isDark = ref();

onMounted(() => {
  isDark.value = toggleDarkMode();
});
</script>

<style scoped lang="scss">
  .settings {}
</style>
