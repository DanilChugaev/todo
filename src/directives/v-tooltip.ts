// https://github.com/maciejziemichod/v-tooltip
export default {
  name: 'tooltip',
  updateTooltip(el: HTMLElement, { value }: { value: string }) {
    // TODO: проверять доступное пространство для вывода
    if (value) {
      el.classList.add('v-tooltip');
    }

    el.setAttribute('data-v-tooltip', value);
  },
  mounted(el: HTMLElement, { value, dir }: { value: string, dir: any }) {
    dir.updateTooltip(el, { value });
  },
  updated(el: HTMLElement, { value, dir }: { value: string, dir: any }) {
    dir.updateTooltip(el, { value });
  },
};
