import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { AddToDoForm } from './index';

describe('App todo form test', () => {
  it('Should have placeholder "add task"', () => {
    render(<AddToDoForm addToDo={() => ({})} />);
    expect(screen.getByPlaceholderText('add task')).toBeInTheDocument();
  });

  it('Should change value', () => {
    render(<AddToDoForm addToDo={() => ({})} />);
    const input = screen.getByRole('textbox');
    expect((input as HTMLInputElement).value).toBe('');
    fireEvent.change(input, { target: { value: 'new task' } });
    expect((input as HTMLInputElement).value).toBe('new task');
  });
});
