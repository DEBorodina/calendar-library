import { RangeCalendarProps } from '../Calendar';

export interface MonthCalendarProps extends RangeCalendarProps {
  panelYear: number;
  panelMonth: number;
  value: Date;
  onChange: (date: Date) => void;
  weekStart: 0 | 1;
  showWeekends: boolean;
  holidays: Date[];
  minDate: Date;
  maxDate: Date;
}
