export interface WeekCalendarProps {
  value: Date;
  onChange: (value: Date) => void;
  min?: Date;
  max?: Date;
  weekStart: 0 | 1;
}
