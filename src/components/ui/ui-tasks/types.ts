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
