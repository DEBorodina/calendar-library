import { DayCalendarGrid } from '@/components/DayCalendarGrid';

import { CalendarState, ICalendar } from './BaseCalendar';

export const dayCalendarDecorator = (calendar: ICalendar) => {
  calendar.grid = DayCalendarGrid;

  const initialGetState = calendar.getState;
  calendar.getState = function (value?: Date): CalendarState {
    value = value ? value : new Date(Date.now());
    const state = {
      ...initialGetState(value),
      panelValue: value,
    };
    return state;
  };

  calendar.handlePrevious = function (state: CalendarState): CalendarState {
    const { panelValue } = state;

    const previousDay = new Date(panelValue.getTime());
    previousDay.setDate(panelValue.getDate() - 1);

    const newState: CalendarState = {
      panelValue: previousDay,
      panelYear: previousDay.getFullYear(),
      panelMonth: previousDay.getMonth(),
    };

    return newState;
  };

  calendar.handleNext = function (state: CalendarState): CalendarState {
    const { panelValue } = state;

    const nextDay = new Date(panelValue.getTime());
    nextDay.setDate(panelValue.getDate() + 1);

    const newState: CalendarState = {
      panelValue: nextDay,
      panelYear: nextDay.getFullYear(),
      panelMonth: nextDay.getMonth(),
    };

    return newState;
  };
};
