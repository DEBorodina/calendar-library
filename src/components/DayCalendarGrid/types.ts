import { CalendarProps } from '../Calendar/types';

export interface DayCalendarProps
  extends Omit<Required<CalendarProps>, 'type'> {
  panelValue: Date;
  panelMonth: number;
}
