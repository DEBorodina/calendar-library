export interface DatePickerProps {
  defaultValue?: Date;
  onChange?: (value: Date) => void;
  min?: Date;
  max?: Date;
}
