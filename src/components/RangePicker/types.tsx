import { CalendarSettings, CalendarThemeProps } from '../DatePicker/types';

export interface RangePickerProps extends CalendarSettings, CalendarThemeProps {
  defaultStartDate?: Date;
  defaultEndDate?: Date;
  onChange: (date: { startDate: Date; endDate: Date }) => void;
}
