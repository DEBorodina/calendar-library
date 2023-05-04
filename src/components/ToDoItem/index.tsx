import React from 'react';

import { Icons } from '@/constants/icons';

import {
  Button,
  ButtonContainer,
  Container,
  DoneButton,
  DoneButtonWithMark,
  Text,
} from './styles';
import { TodoItemProps } from './types';

export const TodoItem: React.FC<TodoItemProps> = ({
  todo: { id, text, isDone },
  toggleIsDone,
  deleteToDo,
}) => {
  const handleDelete = () => {
    deleteToDo(id);
  };

  const handleIsDone = () => {
    toggleIsDone(id);
  };

  return (
    <Container>
      <Text>{text}</Text>
      <ButtonContainer>
        {isDone ? (
          <DoneButtonWithMark onClick={handleIsDone}></DoneButtonWithMark>
        ) : (
          <DoneButton onClick={handleIsDone}></DoneButton>
        )}
        <Button onClick={handleDelete}>{Icons.cross}</Button>
      </ButtonContainer>
    </Container>
  );
};
