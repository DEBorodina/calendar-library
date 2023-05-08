import { CalendarSettings } from '../DatePicker/types';

export interface RangeCalendarProps {
  endDate?: Date;
  startDate?: Date;
}

export interface CalendarProps extends CalendarSettings, RangeCalendarProps {
  value: Date;
  onChange: (value: Date) => void;
}
