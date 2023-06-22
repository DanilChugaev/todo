// ui компоненты
import UiButton from '~/components/ui/ui-button';
import UiCheckbox from '~/components/ui/ui-checkbox';
// import UiInput from '~/components/ui/ui-input';
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

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UiButton: typeof UiButton,
    UiCheckbox: typeof UiCheckbox,
    // UiLink: typeof UiInput,
    UiLink: typeof UiLink,
    UiList: typeof UiList,
    UiSwitch: typeof UiSwitch,
    UiTasks: typeof UiTasks,

    IconClose: typeof IconClose,
    IconMenu: typeof IconMenu,
    IconMoon: typeof IconMoon,
    IconSettings: typeof IconSettings,
    IconInfo: typeof IconInfo,
    IconCheck: typeof IconCheck,
  }
}
