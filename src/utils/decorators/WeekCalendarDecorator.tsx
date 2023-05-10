import { WeekCalendarGrid } from '@/components/WeekCalendarGrid';

import { WeekCalendarHelper } from '../WeekCalendarHelper';
import { CalendarState, ICalendar } from './types';

export const weekCalendarDecorator = (calendar: ICalendar) => {
  calendar.grid = WeekCalendarGrid;

  const initialGetState = calendar.getState;
  calendar.getState = function (value?: Date): CalendarState {
    if (!value) {
      value = new Date(Date.now());
    }

    const state = {
      ...initialGetState(value),
      panelWeek: WeekCalendarHelper.getCurrentWeekNumber(
        value,
        calendar.weekStart
      ),
    };

    return state;
  };

  const initialHandlePrevious = calendar.handlePrevious;
  calendar.handlePrevious = function (state: CalendarState): CalendarState {
    let newState;
    const { panelWeek, panelMonth: previousMonth } = state;

    if (panelWeek === 0) {
      const { panelMonth, panelYear } = initialHandlePrevious(state);

      const numberOfWeeksInAMonth = WeekCalendarHelper.getNumberOfWeeksInMonth(
        panelYear,
        panelMonth,
        calendar.weekStart
      );

      let previousWeekNumber = numberOfWeeksInAMonth - 1;

      const newWeekDays = WeekCalendarHelper.getWeekToDisplay(
        panelYear,
        panelMonth,
        previousWeekNumber,
        calendar.weekStart
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
  };

  const initialHandleNext = calendar.handleNext;
  calendar.handleNext = function (state: CalendarState): CalendarState {
    let newState;
    const {
      panelYear: previousPanelYear,
      panelMonth: previousPanelMonth,
      panelWeek: previousPanelWeek,
    } = state;

    const numberOfWeeksInAMonth = WeekCalendarHelper.getNumberOfWeeksInMonth(
      previousPanelYear,
      previousPanelMonth,
      calendar.weekStart
    );

    if (previousPanelWeek === numberOfWeeksInAMonth - 1) {
      let nextWeekNumber = 0;
      const { panelMonth, panelYear } = initialHandleNext(state);
      const newWeekDays = WeekCalendarHelper.getWeekToDisplay(
        panelYear,
        panelMonth,
        0,
        calendar.weekStart
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
  };
};
