import React, { useMemo, useState } from 'react';

import { months } from '@/constants/months';
import { addToLocalStorage, getFromLocalStorage } from '@/utils/localStorage';

import { AddToDoForm } from '../AddToDoForm';
import { TodoItem } from '../ToDoItem';
import { Container } from './styles';
import { ToDo, ToDoListProps } from './types';

export const ToDoList: React.FC<ToDoListProps> = ({ date, index }) => {
  const [todos, setTodos] = useState(
    (getFromLocalStorage(`todos${date.getTime()}`) ?? []) as ToDo[]
  );
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

  const toggleIsDone = (toggleId: number) => {
    const newTodos = todos.map((task) => {
      if (task.id === toggleId) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });

    setTodos(newTodos);
    addToLocalStorage(`todos${date.getTime()}`, newTodos);
  };

  const toDoList = useMemo(() => {
    return todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        deleteToDo={deleteToDo}
        toggleIsDone={toggleIsDone}
      />
    ));
  }, [todos]);
  return (
    <Container index={index} aria-label="todolist">
      <p>{`${date.getDate()} ${months[date.getMonth()]}`}</p>
      <AddToDoForm addToDo={addToDo} />
      {toDoList.length > 0 ? toDoList : 'No todos yet'}
    </Container>
  );
};
