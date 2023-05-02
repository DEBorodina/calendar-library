import React from 'react';

import { RangeCalendarProps } from '@/components/Calendar';
import { MonthCalendarGrid } from '@/components/MonthCalendarGrid';

export interface ICalendar extends CalendarAutoProps, RangeCalendarProps {
  handlePrevious: (state: CalendarState) => CalendarState;
  handleNext: (state: CalendarState) => CalendarState;
  getState: (value?: Date) => CalendarState;
  getGrid: () => React.FC<CalendarState & CalendarExtraProps>;
  grid: React.FC<CalendarProps>;
}

export interface CalendarState {
  panelMonth: number;
  panelYear: number;
  panelWeek?: number;
  panelValue?: Date;
}

export interface CalendarAutoProps {
  weekStart: 0 | 1;
  showWeekends: boolean;
  holidays: Date[];
  minDate: Date | null;
  maxDate: Date | null;
}

export interface CalendarExtraProps {
  value: Date;
  onChange: (date: Date) => void;
}

export interface CalendarProps
  extends CalendarAutoProps,
    CalendarExtraProps,
    RangeCalendarProps,
    CalendarState {}

export class BaseCalendar implements ICalendar {
  public weekStart: 0 | 1 = 0;
  public showWeekends = false;
  public holidays: Date[] = [];
  public grid = MonthCalendarGrid;
  public minDate: Date | null = null;
  public maxDate: Date | null = null;
  public endDate: Date | null = null;
  public startDate: Date | null = null;

  public getState(value?: Date): CalendarState {
    if (!value) value = new Date(Date.now());
    const state = {
      panelYear: value.getFullYear(),
      panelMonth: value.getMonth(),
    };
    return state;
  }

  public handlePrevious({
    panelMonth,
    panelYear,
  }: CalendarState): CalendarState {
    let newState: CalendarState;
    if (panelMonth == 0) {
      newState = {
        panelMonth: 11,
        panelYear: panelYear - 1,
      };
    } else {
      newState = {
        panelMonth: panelMonth - 1,
        panelYear,
      };
    }
    return newState;
  }

  public handleNext({ panelMonth, panelYear }: CalendarState): CalendarState {
    let newState: CalendarState;
    if (panelMonth == 11) {
      newState = {
        panelMonth: 0,
        panelYear: panelYear + 1,
      };
    } else {
      newState = {
        panelMonth: panelMonth + 1,
        panelYear,
      };
    }
    return newState;
  }

  public getGrid(): React.FC<CalendarExtraProps & CalendarState> {
    const Grid = this.grid;
    const Component: React.FC<CalendarExtraProps & CalendarState> = (
      props: CalendarExtraProps & CalendarState
    ) => {
      return (
        <Grid
          {...props}
          weekStart={this.weekStart}
          showWeekends={this.showWeekends}
          holidays={this.holidays}
          minDate={this.minDate}
          maxDate={this.maxDate}
          endDate={this.endDate}
          startDate={this.startDate}
        />
      );
    };
    return Component;
  }
}
