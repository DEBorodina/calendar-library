import React from 'react';

import { Icons } from '@/constants/icons/Icons';

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
          <DoneButtonWithMark
            onClick={handleIsDone}
            aria-label="done-with-mark"
          ></DoneButtonWithMark>
        ) : (
          <DoneButton onClick={handleIsDone} aria-label="done"></DoneButton>
        )}
        <Button onClick={handleDelete} aria-label="delete">
          {Icons.cross}
        </Button>
      </ButtonContainer>
    </Container>
  );
};
