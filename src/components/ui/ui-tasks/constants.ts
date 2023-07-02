import { PriorityLevel } from './types';
import { UiColor } from '../types';

export const PRIORITY_COLOR: Record<keyof typeof PriorityLevel, keyof typeof UiColor> = {
  urgent: UiColor.red_900,
  high: UiColor.yellow_900,
  normal: UiColor.cyan_700,
  low: UiColor.gray_500,
};
