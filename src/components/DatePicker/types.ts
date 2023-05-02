export interface DatePickerProps {
  defaultValue?: Date;
  onChange: (value: Date) => void;
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
