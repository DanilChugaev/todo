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
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  list?: List;
  tags?: Tag[];
  date?: Date;
  subtasks?: Subtask[]
}
