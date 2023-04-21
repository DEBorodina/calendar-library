export interface MonthCalendarProps {
  panelYear: number;
  panelMonth: number;
  value: Date;
  onChange: (date: Date) => void;
}
