export interface MonthCalendarDayProps {
  date: Date;
  selectedDate: Date;
  panelMonth: number;
  onClick: (date: Date) => void;
  showWeekends: boolean;
  holidays: Date[];
  minDate?: Date;
  maxDate?: Date;
}

export interface CellProps {
  isSelected: boolean;
  isCurrent: boolean;
  isCurrentMonth: boolean;
  isWeekend: boolean;
  isHoliday: boolean;
  isInValidRange: boolean;
}
