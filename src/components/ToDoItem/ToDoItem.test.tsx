import { render, screen } from '@testing-library/react';
import React from 'react';

import { TodoItem } from './index';

describe('App todo form test', () => {
  beforeEach(() => {
    jest.mock('@/constants/icons/Icons', () => ({
      Icons: {
        leftArrow: 'left arrow',
        rightArrow: 'left arrow',
        calendar: 'left arrow',
        cross: 'left arrow',
      },
    }));
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
});
