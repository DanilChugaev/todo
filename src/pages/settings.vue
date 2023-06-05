<template>
  <div class="settings">
    <layout-header title="Settings"/>

    <ui-switch v-model="isDark" @change="toggleDarkMode"/>

    <ui-checkbox v-model="isChecked1" style="margin-top: 30px"/>
    <ui-checkbox v-model="isChecked2" style="margin-top: 30px"/>
    <ui-checkbox v-model="isChecked3" style="margin-top: 30px"/>
    <ui-checkbox v-model="isChecked4" style="margin-top: 30px"/>
    <ui-checkbox v-model="isChecked5" style="margin-top: 30px"/>
    <ui-checkbox v-model="isChecked6" style="margin-top: 30px"/>
    <ui-checkbox v-model="isChecked7" style="margin-top: 30px"/>
    <ui-checkbox v-model="isChecked8" style="margin-top: 30px"/>
    {{isChecked}}
  </div>
</template>

<script lang="ts" setup>
import { inject, ref, onMounted } from 'vue';
import LayoutHeader from '~/components/layout/layout-header.vue';
import UiCheckbox from '../components/ui/ui-checkbox.vue';

const toggleDarkMode = inject('toggleDarkMode');
const isDark = ref(null);
const isChecked1 = ref(false);
const isChecked2 = ref(false);
const isChecked3 = ref(false);
const isChecked4 = ref(false);
const isChecked5 = ref(false);
const isChecked6 = ref(false);
const isChecked7 = ref(false);

onMounted(() => {
  isDark.value = toggleDarkMode();
});
</script>

<style scoped lang="scss">
  .settings {}
</style>
