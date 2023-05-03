import React from 'react';

import { CalendarProps } from '@/utils/decorators/BaseCalendar';

import { MonthCalendarDay } from '../MonthCalendarDay';
import { Container, Wrapper } from './styles';

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
  withToDoList,
}) => {
  return (
    <Wrapper>
      <Container>
        <MonthCalendarDay
          index={0}
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
          withToDoList={withToDoList}
        />
      </Container>
    </Wrapper>
  );
};
