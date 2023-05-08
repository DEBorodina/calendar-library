import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultStyles } from '@/constants/styles';

import { ToDoList } from './index';

jest.mock('@/constants/icons/Icons', () => ({
  Icons: {
    leftArrow: 'left arrow',
    rightArrow: 'left arrow',
    calendar: 'left arrow',
    cross: 'left arrow',
  },
}));

describe('Todolist test', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={defaultStyles}>
        <ToDoList index={0} date={new Date()} />
      </ThemeProvider>
    );
  });
  it('Should display "No todos yet" with no todos', () => {
    expect(screen.getByText('No todos yet')).toBeInTheDocument();
  });

  it('Should add todo', () => {
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new task' } });
    const addButton = screen.getByText('+');
    fireEvent.click(addButton);
    expect(screen.getByText('new task')).toBeInTheDocument();
    expect(screen.queryByText('No todos yet')).not.toBeInTheDocument();
  });

  it("shouldn't add empty todo", () => {
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '' } });
    const addButton = screen.getByText('+');
    fireEvent.click(addButton);
    expect(screen.queryByText('No todos yet')).toBeInTheDocument();
  });

  it('Should delete todo', () => {
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new task' } });
    const addButton = screen.getByText('+');
    fireEvent.click(addButton);
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);
    expect(screen.queryByText('new task')).not.toBeInTheDocument();
  });

  it('Should mark as not done todo', () => {
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new task' } });
    const addButton = screen.getByText('+');
    fireEvent.click(addButton);
    const doneButton = screen.getByRole('button', {
      name: /done/i,
    });
    fireEvent.click(doneButton);
    const notDoneButton = screen.getByRole('button', {
      name: /done-with-mark/i,
    });
    fireEvent.click(notDoneButton);
    expect(
      screen.getByRole('button', {
        name: /done/i,
      })
    ).toBeInTheDocument();
  });

  it('Should mark as done todo', () => {
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new task' } });
    const addButton = screen.getByText('+');
    fireEvent.click(addButton);
    const doneButton = screen.getByRole('button', {
      name: /done/i,
    });
    fireEvent.click(doneButton);
    expect(
      screen.getByRole('button', {
        name: /done-with-mark/i,
      })
    ).toBeInTheDocument();
  });
});
