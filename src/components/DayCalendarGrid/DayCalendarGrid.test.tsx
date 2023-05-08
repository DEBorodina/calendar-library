import { render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultStyles } from '@/constants/styles';

import { DayCalendarGrid } from './index';
import { DayCalendarProps } from './types';

const dayCalendarProps: DayCalendarProps = {
  panelValue: new Date(2023, 1, 3),
  panelMonth: 1,
  weekStart: 0,
  showWeekends: false,
  holidays: [],
  minDate: null,
  maxDate: null,
  endDate: null,
  startDate: null,
  withToDoList: false,
  value: new Date(2023, 1, 1),
  onChange: () => ({}),
};

describe('Day calendar grid test', () => {
  it('Should display certain day', () => {
    render(
      <ThemeProvider theme={defaultStyles}>
        <DayCalendarGrid {...dayCalendarProps} />
      </ThemeProvider>
    );
    expect(screen.getByText(/3/)).toBeInTheDocument();
  });
});
