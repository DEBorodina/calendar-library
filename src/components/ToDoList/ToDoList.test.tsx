import { render, screen } from '@testing-library/react';
import React from 'react';

import { ToDoList } from './index';

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
    render(<ToDoList index={0} date={new Date()} />);
    expect(screen.getByText('no todos yet')).toBeInTheDocument();
    expect(1).toBe(1);
  });
});
