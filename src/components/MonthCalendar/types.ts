export interface MonthCalendarProps {
  value: Date;
  onChange: (value: Date) => void;
  min?: Date;
  max?: Date;
}
