import { BaseCalendarState, Calendar } from '../CalendarService';
import { CalendarDecorator } from './CalendarDecorator';

export class ShowHolidaysDecorator<
  S extends BaseCalendarState,
  P
> extends CalendarDecorator<S, P> {
  public holidays: Date[];

  constructor(calendarToWrap: Calendar<S, P>, holidays: Date[]) {
    super(calendarToWrap);
    this.holidays = holidays;
  }
}
