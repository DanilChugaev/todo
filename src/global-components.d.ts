// ui компоненты
import UiButton from '~/components/ui/ui-button';
import UiCheckbox from '~/components/ui/ui-checkbox';
import UiIcon from '~/components/ui/ui-icon';
// import UiInput from '~/components/ui/ui-input';
import UiLink from '~/components/ui/ui-link';
import UiList from '~/components/ui/ui-list';
import UiSwitch from '~/components/ui/ui-switch';
import UiTasks from '~/components/ui/ui-tasks';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UiButton: typeof UiButton,
    UiCheckbox: typeof UiCheckbox,
    UiIcon: typeof UiIcon,
    // UiLink: typeof UiInput,
    UiLink: typeof UiLink,
    UiList: typeof UiList,
    UiSwitch: typeof UiSwitch,
    UiTasks: typeof UiTasks,
  }
}
