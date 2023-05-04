import { RangeCalendarProps } from '../Calendar/types';

export interface CalendarSettings {
  type?: 'day' | 'week' | 'month';
  weekStart?: 1 | 0;
  showWeekends?: boolean;
  holidays?: Date[];
  minDate?: Date;
  maxDate?: Date;
  endDate?: Date;
  startDate?: Date;
  withToDoList?: boolean;
}

export interface CalendarThemeProps {
  label?: string;
  mainColor?: string;
  holidayColor?: string;
  errorColor?: string;
  size?: 'small' | 'medium' | 'large';
}

export interface DatePickerProps
  extends RangeCalendarProps,
    CalendarSettings,
    CalendarThemeProps {
  defaultValue?: Date;
  onChange: (value: Date) => void;
}
