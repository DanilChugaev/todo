export interface List {
  id: string;
  title: string;
  color: string;
}

export interface Tag {
  id: string;
  title: string;
  color: string;
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

export enum PriorityColor {
  urgent = 'rgba(245, 0, 0)',
  high = 'rgba(255, 204, 0)',
  normal = 'rgba(111, 221, 255)',
  low = 'rgba(216, 216, 216)',
}

export interface Priority {
  id: PriorityLevel,
  title: string,
  color: PriorityColor,
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
