// ui компоненты
import UiButton from '~/components/ui/ui-button.vue';
import UiLink from '~/components/ui/ui-link.vue';
import UiSwitch from '~/components/ui/ui-switch.vue';
// import UiInput from '~/components/ui/ui-input.vue';

// иконки
import IconClose from '~/components/ui/icons/icon-close.vue';
import IconMenu from '~/components/ui/icons/icon-menu.vue';
import IconMoon from '~/components/ui/icons/icon-moon.vue';
import IconSettings from '~/components/ui/icons/icon-settings.vue';
import IconInfo from '~/components/ui/icons/icon-info.vue';

export default [
  { name: 'ui-button', component: UiButton },
  { name: 'ui-link', component: UiLink },
  { name: 'ui-switch', component: UiSwitch },
  { name: 'icon-close', component: IconClose },
  { name: 'icon-menu', component: IconMenu },
  { name: 'icon-moon', component: IconMoon },
  { name: 'icon-settings', component: IconSettings },
  { name: 'icon-info', component: IconInfo },
];
