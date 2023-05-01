import React from 'react';

import { MonthCalendarGrid } from '@/components/MonthCalendarGrid';
import { MonthCalendarProps } from '@/components/MonthCalendarGrid/types';

export interface Calendar<S, P> {
  handlePrevious: (state: S) => S;
  handleNext: (state: S) => S;
  getState: (value?: Date) => S;
  getGrid: () => React.FC<P>;
  weekStart: 0 | 1;
  showWeekends: boolean;
  holidays: Date[];
}

export interface BaseCalendarState {
  panelMonth: number;
  panelYear: number;
}

export class BaseCalendar {
  public weekStart: 0 | 1 = 0;
  public showWeekends = false;
  public holidays: Date[];

  public getState(value?: Date): BaseCalendarState {
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
  }: BaseCalendarState): BaseCalendarState {
    let newState: BaseCalendarState;
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

  public handleNext({
    panelMonth,
    panelYear,
  }: BaseCalendarState): BaseCalendarState {
    let newState: BaseCalendarState;
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

  public getGrid(): React.FC<MonthCalendarProps> {
    const Grid: React.FC<MonthCalendarProps> = (props: MonthCalendarProps) => {
      return <MonthCalendarGrid {...props} />;
    };
    return Grid;
  }
}
