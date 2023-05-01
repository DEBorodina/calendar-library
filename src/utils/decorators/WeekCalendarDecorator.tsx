import React from 'react';

import { WeekCalendarGrid } from '@/components/WeekCalendarGrid';
import { WeekCalendarProps } from '@/components/WeekCalendarGrid/types';

import { BaseCalendarState } from '../CalendarService';
import { WeekCalendarHelper } from '../WeekCalendarHelper';
import { CalendarDecorator } from './CalendarDecorator';

interface WeekCalendarState extends BaseCalendarState {
  panelWeek?: number;
}

type WeekCalendarDecoratorState<T> = WeekCalendarState & T;

export class WeekCalendarDecorator<
  S extends BaseCalendarState
> extends CalendarDecorator<S, WeekCalendarProps> {
  public getState(value?: Date): WeekCalendarDecoratorState<S> {
    if (!value) value = new Date(Date.now());
    const state = {
      ...this.calendarToWrap.getState(value),
      panelWeek: WeekCalendarHelper.getCurrentWeekNumber(
        value,
        this.calendarToWrap.weekStart
      ),
    };
    return state;
  }

  public handlePrevious(
    state: WeekCalendarDecoratorState<S>
  ): WeekCalendarDecoratorState<S> {
    let newState: WeekCalendarDecoratorState<S>;
    const { panelWeek, panelMonth: previousMonth } = state;

    if (panelWeek === 0) {
      const { panelMonth, panelYear } =
        this.calendarToWrap.handlePrevious(state);

      const numberOfWeeksInAMonth = WeekCalendarHelper.getNumberOfWeeksInMonth(
        panelYear,
        panelMonth,
        this.calendarToWrap.weekStart
      );

      let previousWeekNumber = numberOfWeeksInAMonth - 1;

      const newWeekDays = WeekCalendarHelper.getWeekToDisplay(
        panelYear,
        panelMonth,
        previousWeekNumber,
        this.calendarToWrap.weekStart
      );

      const lastWeekDay = newWeekDays[newWeekDays.length - 1];

      if (lastWeekDay.getMonth() === previousMonth) {
        previousWeekNumber--;
      }

      newState = {
        ...state,
        panelMonth,
        panelYear,
        panelWeek: previousWeekNumber,
      };
    } else {
      newState = { ...state, panelWeek: panelWeek - 1 };
    }

    return newState;
  }

  public handleNext(
    state: WeekCalendarDecoratorState<S>
  ): WeekCalendarDecoratorState<S> {
    let newState: WeekCalendarDecoratorState<S>;

    const {
      panelYear: previousPanelYear,
      panelMonth: previousPanelMonth,
      panelWeek: previousPanelWeek,
    } = state;

    const numberOfWeeksInAMonth = WeekCalendarHelper.getNumberOfWeeksInMonth(
      previousPanelYear,
      previousPanelMonth,
      this.calendarToWrap.weekStart
    );

    if (previousPanelWeek === numberOfWeeksInAMonth - 1) {
      let nextWeekNumber = 0;
      const { panelMonth, panelYear } = this.calendarToWrap.handleNext(state);
      const newWeekDays = WeekCalendarHelper.getWeekToDisplay(
        panelYear,
        panelMonth,
        0,
        this.calendarToWrap.weekStart
      );

      const firstWeekDay = newWeekDays[0];

      if (firstWeekDay.getMonth() === previousPanelMonth) {
        nextWeekNumber++;
      }

      newState = { ...state, panelMonth, panelYear, panelWeek: nextWeekNumber };
    } else {
      newState = { ...state, panelWeek: previousPanelWeek + 1 };
    }
    return newState;
  }

  public getGrid(): React.FC<WeekCalendarProps> {
    const Grid: React.FC<WeekCalendarProps> = (props: WeekCalendarProps) => (
      <WeekCalendarGrid {...props} />
    );
    return Grid;
  }
}
