import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { AddToDoForm } from './index';

describe('App todo form test', () => {
  it('Should have placeholder "add task"', () => {
    const mockAddToDo = jest.fn();
    render(<AddToDoForm addToDo={mockAddToDo} />);
    expect(screen.getByPlaceholderText('add task')).toBeInTheDocument();
  });

  it('Should change value', () => {
    const mockAddToDo = jest.fn();
    render(<AddToDoForm addToDo={mockAddToDo} />);
    const input = screen.getByRole('textbox');
    expect((input as HTMLInputElement).value).toBe('');
    fireEvent.change(input, { target: { value: 'new task' } });
    expect((input as HTMLInputElement).value).toBe('new task');
  });

  it('Should call add function with entered value', () => {
    const mockAddToDo = jest.fn();
    render(<AddToDoForm addToDo={mockAddToDo} />);
    const input = screen.getByRole('textbox');
    expect((input as HTMLInputElement).value).toBe('');
    fireEvent.change(input, { target: { value: 'new task' } });
    expect((input as HTMLInputElement).value).toBe('new task');
    fireEvent.click(screen.getByText('+'));
    expect(mockAddToDo.mock.calls[0][0]).toBe('new task');
  });
});
