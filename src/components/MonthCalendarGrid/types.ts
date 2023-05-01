export interface MonthCalendarProps {
  panelYear: number;
  panelMonth: number;
  value: Date;
  onChange: (date: Date) => void;
  weekStart: 0 | 1;
  showWeekends: boolean;
  holidays: Date[];
  minDate: Date;
  maxDate: Date;
  setErrors: React.Dispatch<React.SetStateAction<string>>;
}
