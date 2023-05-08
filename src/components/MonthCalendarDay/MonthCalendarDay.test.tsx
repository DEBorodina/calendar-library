/* eslint-disable simple-import-sort/imports */
import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultStyles } from '@/constants/styles';

import { MonthCalendarDay } from './index';
import { MonthCalendarDayProps } from './types';

const monthProps: MonthCalendarDayProps = {
  date: new Date(2023, 1, 3),
  selectedDate: new Date(2023, 1, 2),
  panelMonth: new Date(2023, 1, 3).getMonth(),
  onClick: () => ({}),
  showWeekends: false,
  holidays: [],
  minDate: null,
  maxDate: null,
  endDate: null,
  startDate: null,
  withToDoList: false,
  index: 0,
};

describe('App todo form test', () => {
  it('Should display not selected day with no styles', () => {
    render(
      <ThemeProvider theme={defaultStyles}>
        <MonthCalendarDay {...monthProps} />
      </ThemeProvider>
    );
    expect(screen.getByText(3)).toBeInTheDocument();
    const day = screen.getByLabelText(/cell/);
    expect(day).toHaveStyleRule('color', '#333333');
    expect(day).toHaveStyleRule('background-color', 'transparent');
    expect(day).toHaveStyleRule('cursor', 'pointer');
  });

  it('Should call onChange function on call', () => {
    monthProps.onClick = jest.fn();
    render(
      <ThemeProvider theme={defaultStyles}>
        <MonthCalendarDay {...monthProps} />
      </ThemeProvider>
    );
    const day = screen.getByLabelText(/cell/);
    fireEvent.click(day);
    expect(monthProps.onClick).toBeCalled();
  });

  it('Should display current day with main color background', () => {
    monthProps.date = new Date();
    render(
      <ThemeProvider theme={defaultStyles}>
        <MonthCalendarDay {...monthProps} />
      </ThemeProvider>
    );
    const day = screen.getByLabelText(/cell/);
    expect(day).toHaveStyleRule('color', '#333333');
    expect(day).toHaveStyleRule('background-color', '#F1F1F1');
  });

  it('Should display selected day with main color background', () => {
    monthProps.date = new Date(2023, 1, 2);
    render(
      <ThemeProvider theme={defaultStyles}>
        <MonthCalendarDay {...monthProps} />
      </ThemeProvider>
    );
    const day = screen.getByLabelText(/cell/);
    expect(day).toHaveStyleRule('color', '#FFFFFF');
    expect(day).toHaveStyleRule('background-color', defaultStyles.mainColor);
  });

  it('Should display previous month day with 0.5 opacity', () => {
    monthProps.date = new Date(2023, 0, 2);
    render(
      <ThemeProvider theme={defaultStyles}>
        <MonthCalendarDay {...monthProps} />
      </ThemeProvider>
    );
    const day = screen.getByLabelText(/cell/);
    expect(day).toHaveStyleRule('opacity', '0.5');
  });

  it('Should display weekends day with main font color', () => {
    monthProps.date = new Date(2023, 4, 7);
    monthProps.showWeekends = true;
    render(
      <ThemeProvider theme={defaultStyles}>
        <MonthCalendarDay {...monthProps} />
      </ThemeProvider>
    );
    const day = screen.getByLabelText(/cell/);
    expect(day).toHaveStyleRule('color', defaultStyles.mainColor);
  });

  it('Should display holidays day with holiday font color', () => {
    monthProps.date = new Date(2023, 4, 7);
    monthProps.holidays = [new Date(2023, 4, 7)];
    render(
      <ThemeProvider theme={defaultStyles}>
        <MonthCalendarDay {...monthProps} />
      </ThemeProvider>
    );
    const day = screen.getByLabelText(/cell/);
    expect(day).toHaveStyleRule('color', defaultStyles.holidayColor);
  });

  it('Should disable days before min date', () => {
    monthProps.minDate = new Date(2023, 1, 4);
    monthProps.date = new Date(2023, 1, 3);
    render(
      <ThemeProvider theme={defaultStyles}>
        <MonthCalendarDay {...monthProps} />
      </ThemeProvider>
    );
    const day = screen.getByLabelText(/cell/);
    expect(day).toHaveStyleRule('opacity', '0.7');
    expect(day).toHaveStyleRule('cursor', 'auto');
  });

  it('Should disable days after max date', () => {
    monthProps.maxDate = new Date(2023, 1, 2);
    monthProps.date = new Date(2023, 1, 3);
    render(
      <ThemeProvider theme={defaultStyles}>
        <MonthCalendarDay {...monthProps} />
      </ThemeProvider>
    );
    const day = screen.getByLabelText(/cell/);
    expect(day).toHaveStyleRule('opacity', '0.7');
    expect(day).toHaveStyleRule('cursor', 'auto');
  });

  it('Should display todolist on hover', () => {
    monthProps.withToDoList = true;
    render(
      <ThemeProvider theme={defaultStyles}>
        <MonthCalendarDay {...monthProps} />
      </ThemeProvider>
    );
    expect(screen.queryByLabelText(/todolist/)).not.toBeInTheDocument();
    const day = screen.getByLabelText(/cell/);
    fireEvent.mouseOver(day);
    expect(screen.getByLabelText(/todolist/)).toBeInTheDocument();
  });

  it('Should display left date from range', () => {
    monthProps.startDate = null;
    monthProps.endDate = new Date(2023, 1, 10);
    monthProps.date = new Date(2023, 1, 4);
    monthProps.selectedDate = new Date(2023, 1, 4);
    render(
      <ThemeProvider theme={defaultStyles}>
        <MonthCalendarDay {...monthProps} />
      </ThemeProvider>
    );
    const day = screen.getByLabelText(/cell/);
    expect(day).toHaveStyleRule('border-top-left-radius', '8px');
    expect(day).toHaveStyleRule('border-bottom-left-radius', '8px');
    expect(day).toHaveStyleRule('border-top-right-radius', '0px');
    expect(day).toHaveStyleRule('border-bottom-right-radius', '0px');
  });

  it('Should display right date from range', () => {
    monthProps.startDate = new Date(2023, 1, 2);
    monthProps.endDate = null;
    monthProps.date = new Date(2023, 1, 4);
    monthProps.selectedDate = new Date(2023, 1, 4);
    render(
      <ThemeProvider theme={defaultStyles}>
        <MonthCalendarDay {...monthProps} />
      </ThemeProvider>
    );
    const day = screen.getByLabelText(/cell/);
    expect(day).toHaveStyleRule('border-top-left-radius', '0px');
    expect(day).toHaveStyleRule('border-bottom-left-radius', '0px');
    expect(day).toHaveStyleRule('border-top-right-radius', '8px');
    expect(day).toHaveStyleRule('border-bottom-right-radius', '8px');
  });

  it('Should display middle date from range', () => {
    monthProps.startDate = new Date(2023, 1, 1);
    monthProps.date = new Date(2023, 1, 2);
    monthProps.selectedDate = new Date(2023, 1, 4);

    monthProps.panelMonth = monthProps.date.getMonth();
    monthProps.maxDate = null;
    monthProps.minDate = null;
    render(
      <ThemeProvider theme={defaultStyles}>
        <MonthCalendarDay {...monthProps} />
      </ThemeProvider>
    );
    const day = screen.getByLabelText(/cell/);
    expect(day).toHaveStyleRule('border-top-left-radius', '0px');
    expect(day).toHaveStyleRule('border-bottom-left-radius', '0px');
    expect(day).toHaveStyleRule('border-top-right-radius', '0px');
    expect(day).toHaveStyleRule('border-bottom-right-radius', '0px');
    expect(day).toHaveStyleRule('opacity', '0.6');
  });
});
