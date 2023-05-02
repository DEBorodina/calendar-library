export interface RangePickerProps {
  defaultStartDate?: Date;
  defaultEndDate?: Date;
  onChange: (date: { startDate: Date; endDate: Date }) => void;
  type?: 'week' | 'month';
  weekStart?: 'monday' | 'sunday';
  showWeekends?: boolean;
  holidays?: Date[];
  minDate?: Date;
  maxDate?: Date;
  label?: string;
  mainColor?: string;
  holidayColor?: string;
  errorColor?: string;
  size: 'small' | 'medium' | 'large';
}
