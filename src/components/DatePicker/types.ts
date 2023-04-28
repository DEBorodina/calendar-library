export interface DatePickerProps {
  defaultValue?: Date;
  onChange?: (value: Date) => void;
  type: 'week' | 'month';
  min?: Date;
  max?: Date;
}
