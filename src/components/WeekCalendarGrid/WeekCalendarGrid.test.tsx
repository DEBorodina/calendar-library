import { render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultStyles } from '@/constants/styles';

import { WeekCalendarGrid } from './index';
import { WeekCalendarProps } from './types';

const weekCalendarProps: WeekCalendarProps = {
  panelWeek: 1,
  panelMonth: 4,
  panelYear: 2023,
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

describe('Week calendar grid test', () => {
  it('Should display certain week', () => {
    render(
      <ThemeProvider theme={defaultStyles}>
        <WeekCalendarGrid {...weekCalendarProps} />
      </ThemeProvider>
    );
    new Array(7).fill(1).forEach((_, i) => {
      expect(screen.getByText((i + 7).toString())).toBeInTheDocument();
    });
    expect(screen.getAllByLabelText(/cell/)).toHaveLength(7);
  });

  it('Should display certain week with previous month days', () => {
    weekCalendarProps.panelWeek = 0;
    render(
      <ThemeProvider theme={defaultStyles}>
        <WeekCalendarGrid {...weekCalendarProps} />
      </ThemeProvider>
    );
    expect(screen.getByText('30')).toBeInTheDocument();
    new Array(6).fill(1).forEach((_, i) => {
      expect(screen.getByText((i + 1).toString())).toBeInTheDocument();
    });
    expect(screen.getAllByLabelText(/cell/)).toHaveLength(7);
  });

  it('Should display certain week with next month days', () => {
    weekCalendarProps.panelWeek = 4;
    render(
      <ThemeProvider theme={defaultStyles}>
        <WeekCalendarGrid {...weekCalendarProps} />
      </ThemeProvider>
    );
    new Array(4).fill(1).forEach((_, i) => {
      expect(screen.getByText((31 - i).toString())).toBeInTheDocument();
    });
    new Array(3).fill(1).forEach((_, i) => {
      expect(screen.getByText((i + 1).toString())).toBeInTheDocument();
    });
    expect(screen.getAllByLabelText(/cell/)).toHaveLength(7);
  });

  it('Should display certain week started with monday', () => {
    weekCalendarProps.panelWeek = 1;
    weekCalendarProps.weekStart = 1;
    render(
      <ThemeProvider theme={defaultStyles}>
        <WeekCalendarGrid {...weekCalendarProps} />
      </ThemeProvider>
    );
    new Array(7).fill(1).forEach((_, i) => {
      expect(screen.getByText((i + 8).toString())).toBeInTheDocument();
    });
    expect(screen.getAllByLabelText(/cell/)).toHaveLength(7);
  });
});
