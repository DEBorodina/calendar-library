import { RangeCalendarProps } from '@/components/Calendar/types';

export interface CalendarState {
  panelMonth: number;
  panelYear: number;
  panelWeek?: number;
  panelValue?: Date;
}

export interface CalendarAutoProps {
  weekStart: 0 | 1;
  showWeekends: boolean;
  holidays: Date[];
  minDate: Date | null;
  maxDate: Date | null;
  withToDoList: boolean;
}

export interface CalendarExtraProps {
  value: Date;
  onChange: (date: Date) => void;
}

export interface CalendarProps
  extends CalendarAutoProps,
    CalendarExtraProps,
    RangeCalendarProps,
    CalendarState {}

export interface ICalendar extends CalendarAutoProps, RangeCalendarProps {
  handlePrevious: (state: CalendarState) => CalendarState;
  handleNext: (state: CalendarState) => CalendarState;
  getState: (value?: Date) => CalendarState;
  getGrid: () => React.FC<CalendarState & CalendarExtraProps>;
  grid: React.FC<Omit<Required<CalendarProps>, 'type'>>;
}
