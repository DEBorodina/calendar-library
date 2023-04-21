export interface MonthCalendarDayProps {
  date: Date;
  selectedDate: Date;
  panelMonth: number;
  onClick: (date: Date) => void;
}

export interface CellProps {
  isSelected: boolean;
  isCurrent: boolean;
  isCurrentMonth: boolean;
}
