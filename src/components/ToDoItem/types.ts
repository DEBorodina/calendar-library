import { ToDo } from '../ToDoList/types';

export interface TodoItemProps {
  deleteToDo: (id: number) => void;
  toggleIsDone: (id: number) => void;
  todo: ToDo;
}
