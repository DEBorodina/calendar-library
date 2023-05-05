import { render, screen } from '@testing-library/react';
import React from 'react';

import { ToDoList } from './index';

describe('App todo form test', () => {
  beforeEach(() => {
    jest.mock('@/constants/icons/Icons');
  });
  it('Should display certain todo', () => {
    render(<ToDoList index={0} date={new Date()} />);
    expect(screen.getByText('no todos yet')).toBeInTheDocument();
    expect(1).toBe(1);
  });
});
