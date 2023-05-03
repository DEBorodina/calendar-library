import React from 'react';

import { Icons } from '@/constants/icons';

import { ToDo } from '../ToDoList';
import {
  Button,
  ButtonContainer,
  Container,
  DoneButton,
  DoneButtonWithMark,
  Text,
} from './styles';

export interface TodoItemProps {
  deleteToDo: (id: number) => void;
  toggleIsDone: (id: number) => void;
  todo: ToDo;
}
export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleIsDone,
  deleteToDo,
}) => {
  const handleDelete = () => {
    deleteToDo(todo.id);
  };

  const handleIsDone = () => {
    toggleIsDone(todo.id);
  };
  return (
    <Container>
      <Text>{todo.text}</Text>
      <ButtonContainer>
        {todo.isDone ? (
          <DoneButtonWithMark onClick={handleIsDone}></DoneButtonWithMark>
        ) : (
          <DoneButton onClick={handleIsDone}></DoneButton>
        )}
        <Button onClick={handleDelete}>{Icons.cross}</Button>
      </ButtonContainer>
    </Container>
  );
};
