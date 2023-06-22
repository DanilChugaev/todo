// ui компоненты
import UiButton from '~/components/ui/ui-button';
import UiCheckbox from '~/components/ui/ui-checkbox';
// import UiInput from '~/components/ui/ui-input.vue';
import UiLink from '~/components/ui/ui-link';
import UiList from '~/components/ui/ui-list';
import UiSwitch from '~/components/ui/ui-switch';
import UiTasks from '~/components/ui/ui-tasks';

// иконки
import IconClose from '~/components/icons/icon-close.vue';
import IconMenu from '~/components/icons/icon-menu.vue';
import IconMoon from '~/components/icons/icon-moon.vue';
import IconSettings from '~/components/icons/icon-settings.vue';
import IconInfo from '~/components/icons/icon-info.vue';
import IconCheck from '~/components/icons/icon-check.vue';

export default [
  { name: 'ui-button', component: UiButton },
  { name: 'ui-checkbox', component: UiCheckbox },
  // { name: 'ui-input', component: UiInput },
  { name: 'ui-link', component: UiLink },
  { name: 'ui-list', component: UiList },
  { name: 'ui-switch', component: UiSwitch },
  { name: 'ui-tasks', component: UiTasks },

  { name: 'icon-close', component: IconClose },
  { name: 'icon-menu', component: IconMenu },
  { name: 'icon-moon', component: IconMoon },
  { name: 'icon-settings', component: IconSettings },
  { name: 'icon-info', component: IconInfo },
  { name: 'icon-check', component: IconCheck },
];
