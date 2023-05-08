import { BaseCalendarSettings, CalendarThemeProps } from '../DatePicker/types';

export interface RangePickerProps
  extends BaseCalendarSettings,
    CalendarThemeProps {
  defaultStartDate?: Date;
  defaultEndDate?: Date;
  onChange: (date: { startDate: Date; endDate: Date }) => void;
}
