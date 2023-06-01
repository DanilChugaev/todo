<template>
  <div class="settings">
    <layout-header title="Settings"/>

    <ui-switch v-model="isDark" @change="toggleDarkMode"/>
  </div>
</template>

<script lang="ts" setup>
import { inject, ref, onMounted } from 'vue';
import LayoutHeader from '~/components/layout/layout-header.vue';

const toggleDarkMode = inject('toggleDarkMode');
const isDark = ref(null);

onMounted(() => {
  isDark.value = toggleDarkMode();
});
</script>

<style scoped lang="scss">
  .settings {}
</style>
