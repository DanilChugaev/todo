// @ts-nocheck
import UiButton from '~/components/ui/ui-button';
import UiCheckbox from '~/components/ui/ui-checkbox';
import UiColorContainer from '~/components/ui/ui-color-container';
import UiCounter from '~/components/ui/ui-counter';
import UiIcon from '~/components/ui/ui-icon';
import UiLink from '~/components/ui/ui-link';
import UiList from '~/components/ui/ui-list';
import UiSwitch from '~/components/ui/ui-switch';
import UiTag from '~/components/ui/ui-tag';
import UiTagsContainer from '~/components/ui/ui-tags-container';
import UiTasks from '~/components/ui/ui-tasks';
// import UiInput from '~/components/ui/ui-input';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UiButton: typeof UiButton,
    UiCheckbox: typeof UiCheckbox,
    UiColorContainer: typeof UiColorContainer,
    UiCounter: typeof UiCounter,
    UiIcon: typeof UiIcon,
    UiLink: typeof UiLink,
    UiList: typeof UiList,
    UiSwitch: typeof UiSwitch,
    UiTag: typeof UiTag,
    UiTagsContainer: typeof UiTagsContainer,
    UiTasks: typeof UiTasks,
    // UiInput: typeof UiInput,
  }
}
