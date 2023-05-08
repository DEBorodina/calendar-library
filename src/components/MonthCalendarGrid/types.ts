import { CalendarProps } from '../Calendar/types';

export interface MonthCalendarProps
  extends Omit<Required<CalendarProps>, 'type'> {
  panelYear: number;
  panelMonth: number;
}
