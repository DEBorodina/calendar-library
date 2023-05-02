import { BaseCalendar, ICalendar } from './BaseCalendar';
import { dayCalendarDecorator } from './DayCalendarDecorator';
import { weekCalendarDecorator } from './WeekCalendarDecorator';

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

  protected static weekCalendar = (calendar: ICalendar) => {
    weekCalendarDecorator(calendar);
  };

  protected static dayCalendar = (calendar: ICalendar) => {
    dayCalendarDecorator(calendar);
  };

  public static configCalendar = (
    type: 'day' | 'week' | 'month',
    weekStart: 'monday' | 'sunday',
    showWeekends: boolean,
    holidays: Date[],
    minDate: Date,
    maxDate: Date
  ) => {
    const calendar: ICalendar = new BaseCalendar();

    if (type === 'week') DecoratorService.weekCalendar(calendar);
    if (type === 'day') DecoratorService.dayCalendar(calendar);
    if (weekStart === 'monday') DecoratorService.withWeekStartMonday(calendar);
    if (showWeekends) DecoratorService.withShowWeekends(calendar);
    if (holidays) DecoratorService.withShowHolidays(calendar, holidays);
    if (minDate) DecoratorService.withMinDate(calendar, minDate);
    if (maxDate) DecoratorService.withMaxDate(calendar, maxDate);

    return calendar;
  };
}
