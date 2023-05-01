import React, { useLayoutEffect, useMemo, useState } from 'react';

import { months } from '@/constants/months';
import { BaseCalendar, BaseCalendarState } from '@/utils/CalendarService';
import { MondayWeekStartDecorator } from '@/utils/decorators/MondayWeekStartDecorator';
import { ShowHolidaysDecorator } from '@/utils/decorators/ShowHolidaysDecorator';
import { ShowWeekendDecorator } from '@/utils/decorators/ShowWeekendsDecorator';
import { WeekCalendarDecorator } from '@/utils/decorators/WeekCalendarDecorator';

import { ControlPanel } from '../ControlPanel';
import { Calendar as Container } from './styles';

type CalendarWithDecorators =
  | BaseCalendar
  | WeekCalendarDecorator<BaseCalendarState>
  | MondayWeekStartDecorator<BaseCalendarState, MonthCalendarProps>;

export interface MonthCalendarProps {
  value: Date;
  onChange: (value: Date) => void;
  type: 'week' | 'month';
  weekStart?: 'monday' | 'sunday';
  showWeekends?: boolean;
  holidays?: Date[];
  minDate?: Date;
  maxDate?: Date;
  setErrors: React.Dispatch<React.SetStateAction<string>>;
}

const configCalendar = (
  type: 'week' | 'month',
  weekStart: 'monday' | 'sunday',
  showWeekends: boolean,
  holidays: Date[]
): CalendarWithDecorators => {
  let calendar: CalendarWithDecorators = new BaseCalendar();
  if (holidays) {
    calendar = new ShowHolidaysDecorator<BaseCalendarState, MonthCalendarProps>(
      calendar,
      holidays
    );
  }
  if (weekStart === 'monday') {
    calendar = new MondayWeekStartDecorator<
      BaseCalendarState,
      MonthCalendarProps
    >(calendar); //TODO change types
  }
  if (showWeekends)
    calendar = new ShowWeekendDecorator<BaseCalendarState, MonthCalendarProps>(
      calendar //TODO change types
    );
  if (type === 'week') {
    calendar = new WeekCalendarDecorator<BaseCalendarState>(calendar);
  }
  return calendar;
};

export const Calendar: React.FC<MonthCalendarProps> = ({
  value,
  onChange,
  type,
  weekStart,
  showWeekends,
  holidays,
  minDate,
  maxDate,
  setErrors,
}) => {
  const calendar = useMemo(
    () => configCalendar(type, weekStart, showWeekends, holidays),
    [type, weekStart, showWeekends, holidays]
  );
  const CalendarGrid = useMemo(
    () => calendar.getGrid(),
    [calendar]
  ) as React.FC<any>; //TODO choose type

  const [state, setState] = useState(calendar.getState(value));

  const handlePrevious = () => {
    const newState = calendar.handlePrevious(state);
    setState(newState);
  };

  const handleNext = () => {
    const newState = calendar.handleNext(state);
    setState(newState);
  };

  useLayoutEffect(() => {
    setState(calendar.getState(value));
  }, [value, calendar]);

  return (
    <Container>
      <ControlPanel
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        title={`${months[state.panelMonth]} ${state.panelYear}`}
      />
      <CalendarGrid
        {...state}
        onChange={onChange}
        value={value}
        weekStart={calendar.weekStart}
        showWeekends={calendar.showWeekends}
        holidays={calendar.holidays}
        minDate={minDate}
        maxDate={maxDate}
        setErrors={setErrors}
      />
    </Container>
  );
};

/*  {...state}
        onChange={onChange}
        value={value}
        weekStart={calendar.weekStart} */
