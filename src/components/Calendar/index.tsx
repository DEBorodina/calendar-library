import React, { useMemo, useState } from 'react';

import { months } from '@/constants/months';
import { DecoratorService } from '@/utils/decorators/DecoratorService';

import { ControlPanel } from '../ControlPanel';
import { Container, Wrapper } from './styles';

export interface MonthCalendarProps {
  value: Date;
  onChange: (value: Date) => void;
  type: 'week' | 'month' | 'day';
  weekStart?: 'monday' | 'sunday';
  showWeekends?: boolean;
  holidays?: Date[];
  minDate?: Date;
  maxDate?: Date;
  withToDoList: boolean;
}

export interface RangeCalendarProps {
  endDate?: Date;
  startDate?: Date;
}

const configState = (
  type: 'day' | 'week' | 'month',
  weekStart: 'monday' | 'sunday',
  showWeekends: boolean,
  holidays: Date[],
  minDate: Date,
  maxDate: Date,
  endDate: Date,
  startDate: Date
) => {
  const calendar = DecoratorService.configCalendar(
    type,
    weekStart,
    showWeekends,
    holidays,
    minDate,
    maxDate,
    endDate,
    startDate
  );
  return calendar.getState();
};

export const Calendar: React.FC<MonthCalendarProps & RangeCalendarProps> = ({
  value,
  onChange,
  type,
  weekStart,
  showWeekends,
  holidays,
  minDate,
  maxDate,
  endDate,
  startDate,
}) => {
  const [state, setState] = useState(
    configState(
      type,
      weekStart,
      showWeekends,
      holidays,
      minDate,
      maxDate,
      endDate,
      startDate
    )
  );

  const calendar = useMemo(() => {
    const calendar = DecoratorService.configCalendar(
      type,
      weekStart,
      showWeekends,
      holidays,
      minDate,
      maxDate,
      endDate,
      startDate
    );
    setState(calendar.getState(value));

    return calendar;
  }, [
    type,
    weekStart,
    showWeekends,
    holidays,
    minDate,
    maxDate,
    value,
    endDate,
    startDate,
  ]);

  const CalendarGrid = useMemo(() => {
    return calendar.getGrid();
  }, [calendar]);

  const handlePrevious = () => {
    const newState = calendar.handlePrevious(state);
    setState(newState);
  };

  const handleNext = () => {
    const newState = calendar.handleNext(state);
    setState(newState);
  };
  return (
    <Wrapper>
      <Container>
        <ControlPanel
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          title={`${months[state.panelMonth]} ${state.panelYear}`}
        />
        <CalendarGrid {...state} onChange={onChange} value={value} />
      </Container>
    </Wrapper>
  );
};
