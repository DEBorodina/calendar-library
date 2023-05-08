import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { TodoItem } from './index';

jest.mock('@/constants/icons/Icons', () => ({
  Icons: {
    leftArrow: 'left arrow',
    rightArrow: 'left arrow',
    calendar: 'left arrow',
    cross: 'left arrow',
  },
}));

describe('App todo form test', () => {
  it('Should display certain todo', () => {
    const todo = {
      id: 1,
      isDone: false,
      text: 'new todo',
    };
    render(
      <TodoItem toggleIsDone={() => ({})} deleteToDo={() => ({})} todo={todo} />
    );
    expect(screen.getByText('new todo')).toBeInTheDocument();
  });

  it('Should display certain todo', () => {
    const todo = {
      id: 1,
      isDone: false,
      text: 'new todo',
    };
    render(
      <TodoItem toggleIsDone={() => ({})} deleteToDo={() => ({})} todo={todo} />
    );
    expect(screen.getByText('new todo')).toBeInTheDocument();
  });

  it('Should call delete todo', () => {
    const mockDeleteTodo = jest.fn();
    const todo = {
      id: 1,
      isDone: false,
      text: 'new todo',
    };
    render(
      <TodoItem
        toggleIsDone={() => ({})}
        deleteToDo={mockDeleteTodo}
        todo={todo}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /delete/i }));
    expect(mockDeleteTodo).toBeCalled();
  });

  it('Should call delete todo', () => {
    const mockDoneTodo = jest.fn();
    const todo = {
      id: 1,
      isDone: false,
      text: 'new todo',
    };
    render(
      <TodoItem
        toggleIsDone={mockDoneTodo}
        deleteToDo={() => ({})}
        todo={todo}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /done/i }));
    expect(mockDoneTodo).toBeCalled();
  });

  it('Should display done todo', () => {
    const todo = {
      id: 1,
      isDone: true,
      text: 'new todo',
    };
    render(
      <TodoItem toggleIsDone={() => ({})} deleteToDo={() => ({})} todo={todo} />
    );
    expect(
      screen.getByRole('button', { name: /done-with-mark/i })
    ).toBeInTheDocument();
  });
});
