import { RangeCalendarProps } from '../Calendar/types';

export interface MonthCalendarDayProps extends RangeCalendarProps {
  date: Date;
  selectedDate: Date;
  panelMonth: number;
  onClick: (date: Date) => void;
  showWeekends: boolean;
  holidays: Date[];
  minDate?: Date;
  maxDate?: Date;
  withToDoList: boolean;
  index: number;
}

export interface CellProps {
  isSelected: boolean;
  isCurrent: boolean;
  isSelectedMonth: boolean;
  isWeekend: boolean;
  isHoliday: boolean;
  isInValidRange: boolean;
  isInRange: boolean;
  isEndValue: boolean;
  isStartValue: boolean;
}

export interface CellSettingsProps extends CellProps {
  hasTodos: boolean;
}
