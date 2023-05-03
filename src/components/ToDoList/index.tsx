import React, { useState } from 'react';

import { months } from '@/constants/months';
import { addToLocalStorage, getFromLocalStorage } from '@/utils/localStoraage';

import { AddToDoForm } from '../AddToDoForm';
import { TodoItem } from '../ToDoItem';
import { Container, Title } from './styles';
import { ToDoListProps } from './types';

export interface ToDo {
  id: number;
  text: string;
  isDone: boolean;
}

const getInitialTodos = (date: Date): ToDo[] => {
  return getFromLocalStorage(`todos${date.getTime()}`)
    ? getFromLocalStorage(`todos${date.getTime()}`)
    : [];
};

export const ToDoList: React.FC<ToDoListProps> = ({ date, index }) => {
  const [todos, setTodos] = useState(getInitialTodos(date));

  const addToDo = (todo: string) => {
    const newTodo = {
      id: Date.now(),
      text: todo,
      isDone: false,
    };

    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
    addToLocalStorage(`todos${date.getTime()}`, newTodos);
  };

  const deleteToDo = (idToDelete: number) => {
    const newTodos = todos.filter(({ id }) => id !== idToDelete);

    setTodos(newTodos);
    addToLocalStorage(`todos${date.getTime()}`, newTodos);
  };

  const toggleIsDone = (doneId: number) => {
    const newTodos = todos.map((task) => {
      if (task.id === doneId) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });

    setTodos(newTodos);
    addToLocalStorage(`todos${date.getTime()}`, newTodos);
  };

  return (
    <Container index={index}>
      <Title>{`${date.getDate()} ${months[date.getMonth()]}`}</Title>
      <AddToDoForm addToDo={addToDo} />
      {todos.length > 0
        ? todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteToDo={deleteToDo}
              toggleIsDone={toggleIsDone}
            />
          ))
        : 'No todos yet'}
    </Container>
  );
};
