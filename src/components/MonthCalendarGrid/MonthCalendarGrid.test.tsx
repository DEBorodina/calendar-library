import { render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultStyles } from '@/constants/styles';

import { MonthCalendarGrid } from './index';
import { MonthCalendarProps } from './types';

const monthCalendarProps: MonthCalendarProps = {
  panelYear: 2023,
  panelMonth: 4,
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

describe('Month calendar grid test', () => {
  it('Should display certain month', () => {
    render(
      <ThemeProvider theme={defaultStyles}>
        <MonthCalendarGrid {...monthCalendarProps} />
      </ThemeProvider>
    );
    const expectedDays = new Array(31).fill(0).map((_, i) => {
      return (i + 1).toString();
    });
    expectedDays.unshift('30');
    expectedDays.push('1', '2', '3');

    const days = screen.getAllByLabelText(/cell/);
    expect(days).toHaveLength(31 + 4);
    days.forEach((day, i) => {
      expect(day).toHaveTextContent(expectedDays[i]);
    });
  });

  it('Should display certain month with week start on monday', () => {
    monthCalendarProps.weekStart = 1;
    render(
      <ThemeProvider theme={defaultStyles}>
        <MonthCalendarGrid {...monthCalendarProps} />
      </ThemeProvider>
    );
    const expectedDays = new Array(31).fill(0).map((_, i) => {
      return (i + 1).toString();
    });
    expectedDays.push('1', '2', '3', '4');

    const days = screen.getAllByLabelText(/cell/);
    expect(days).toHaveLength(31 + 4);
    days.forEach((day, i) => {
      expect(day).toHaveTextContent(expectedDays[i]);
    });
  });
});
