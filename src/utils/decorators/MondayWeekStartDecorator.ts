import { BaseCalendarState } from '../CalendarService';
import { CalendarDecorator } from './CalendarDecorator';

export class MondayWeekStartDecorator<
  S extends BaseCalendarState,
  P
> extends CalendarDecorator<S, P> {
  public weekStart: 0 | 1 = 1;
}
