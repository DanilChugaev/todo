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
import IconInfo from '~/components/ui/icons/icon-Iifo.vue';
import IconCheck from '~/components/ui/icons/icon-check.vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UiButton: typeof UiButton,
    UiLink: typeof UiLink,
    UiSwitch: typeof UiSwitch,
    IconClose: typeof IconClose,
    IconMenu: typeof IconMenu,
    IconMoon: typeof IconMoon,
    IconSettings: typeof IconSettings,
    IconInfo: typeof IconInfo,
    IconCheck: typeof IconCheck,
  }
}
