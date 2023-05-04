export interface ToDo {
  id: number;
  text: string;
  isDone: boolean;
}

export interface ToDoListProps {
  date: Date;
  index: number;
}

export interface ContainerProps {
  index: number;
}
