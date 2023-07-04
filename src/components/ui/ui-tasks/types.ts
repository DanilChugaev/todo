import { Tag } from '../ui-tag/types';
import { UiColor } from '../types';

export interface List {
  id: string;
  title: string;
  color: UiColor;
}

export interface Subtask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export enum PriorityLevel {
  urgent = 'urgent',
  high = 'high',
  normal = 'normal',
  low = 'low',
}

export interface Priority {
  id: PriorityLevel,
  title: string,
  color: PriorityLevel,
}

export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
  description?: string;
  list?: List;
  tags?: Tag[];
  date?: Date;
  subtasks?: Subtask[];
  priority?: Priority;
}
