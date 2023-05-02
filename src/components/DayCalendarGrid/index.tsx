import React from 'react';

import { CalendarProps } from '@/utils/decorators/BaseCalendar';

import { MonthCalendarDay } from '../MonthCalendarDay';
import { Container } from './styles';

export const DayCalendarGrid: React.FC<CalendarProps> = ({
  panelValue,
  panelMonth,
  value,
  onChange,
  showWeekends,
  holidays,
  minDate,
  maxDate,
  endDate,
  startDate,
}) => {
  return (
    <Container>
      <MonthCalendarDay
        date={panelValue}
        selectedDate={value}
        panelMonth={panelMonth}
        onClick={onChange}
        showWeekends={showWeekends}
        holidays={holidays}
        minDate={minDate}
        maxDate={maxDate}
        endDate={endDate}
        startDate={startDate}
      />
    </Container>
  );
};
