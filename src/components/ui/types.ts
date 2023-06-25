export interface UiListItem {
  icon?: string;
  text: string;
  to: string;
  counter?: number;
}

export enum UiSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}
