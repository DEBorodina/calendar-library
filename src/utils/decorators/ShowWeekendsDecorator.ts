import { BaseCalendarState } from '../CalendarService';
import { CalendarDecorator } from './CalendarDecorator';

export class ShowWeekendDecorator<
  S extends BaseCalendarState,
  P
> extends CalendarDecorator<S, P> {
  public showWeekends = true;
}
