export interface DayCalendarProps {
  value: Date;
  onChange: (value: Date) => void;
  min?: Date;
  max?: Date;
}
