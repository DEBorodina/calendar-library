// eslint-disable-next-line simple-import-sort/imports
import { CalendarSettings } from '@/components/DatePicker/types';

import { BaseCalendar } from './BaseCalendar';
import { dayCalendarDecorator } from './DayCalendarDecorator';
import { weekCalendarDecorator } from './WeekCalendarDecorator';
import { ICalendar } from './types';

export class DecoratorService {
  protected static withWeekStartMonday = (calendar: ICalendar) => {
    calendar.weekStart = 1;
  };

  protected static withShowWeekends = (calendar: ICalendar) => {
    calendar.showWeekends = true;
  };

  protected static withShowHolidays = (
    calendar: ICalendar,
    holidays: Date[]
  ) => {
    calendar.holidays = holidays;
  };

  protected static withMinDate = (calendar: ICalendar, minDate: Date) => {
    calendar.minDate = minDate;
  };

  protected static withMaxDate = (calendar: ICalendar, maxDate: Date) => {
    calendar.maxDate = maxDate;
  };

  protected static withEndDate = (calendar: ICalendar, endDate: Date) => {
    calendar.endDate = endDate;
  };

  protected static withStartDate = (calendar: ICalendar, startDate: Date) => {
    calendar.startDate = startDate;
  };

  protected static withToDoList = (calendar: ICalendar) => {
    calendar.withToDoList = true;
  };

  protected static weekCalendar = (calendar: ICalendar) => {
    weekCalendarDecorator(calendar);
  };

  protected static dayCalendar = (calendar: ICalendar) => {
    dayCalendarDecorator(calendar);
  };

  public static configCalendar = (settings: CalendarSettings) => {
    const {
      type,
      weekStart,
      showWeekends,
      holidays,
      minDate,
      maxDate,
      endDate,
      startDate,
      withToDoList,
    } = settings;

    const calendar: ICalendar = new BaseCalendar();

    if (type === 'week') DecoratorService.weekCalendar(calendar);
    if (type === 'day') DecoratorService.dayCalendar(calendar);

    if (weekStart === 1) DecoratorService.withWeekStartMonday(calendar);

    if (showWeekends) DecoratorService.withShowWeekends(calendar);
    if (holidays) DecoratorService.withShowHolidays(calendar, holidays);

    if (minDate) DecoratorService.withMinDate(calendar, minDate);
    if (maxDate) DecoratorService.withMaxDate(calendar, maxDate);

    if (endDate) DecoratorService.withEndDate(calendar, endDate);
    if (startDate) DecoratorService.withStartDate(calendar, startDate);

    if (withToDoList) DecoratorService.withToDoList(calendar);
    return calendar;
  };
}
