import React, { useMemo } from 'react';

import { MonthCalendarCell } from '@/styles/common';
import { MonthCalendarHelper } from '@/utils/MonthCalendarHelper';
import { WeekCalendarHelper } from '@/utils/WeekCalendarHelper';

import { MonthCalendarDay } from '../MonthCalendarDay';
import { CalendarGrid, Container } from './styles';
import { MonthCalendarProps } from './types';

export const MonthCalendarGrid: React.FC<MonthCalendarProps> = ({
  panelMonth,
  panelYear,
  value,
  onChange,
  weekStart,
  ...settings
}) => {
  const dateCells = useMemo(() => {
    return MonthCalendarHelper.getMonthToDisplay(
      panelYear,
      panelMonth,
      weekStart
    );
  }, [panelMonth, panelYear, weekStart]);

  const weekDaysToDisplay = useMemo(
    () => WeekCalendarHelper.getWeekDaysNamesToDisplay(weekStart),
    [weekStart]
  );

  return (
    <CalendarGrid>
      {weekDaysToDisplay.map((day) => (
        <MonthCalendarCell key={day}>{day}</MonthCalendarCell>
      ))}
      {dateCells.map((date, index) => {
        return (
          <Container key={date.getTime()}>
            <MonthCalendarDay
              index={index % 7}
              onClick={onChange}
              date={date}
              selectedDate={value}
              panelMonth={panelMonth}
              {...settings}
            />
          </Container>
        );
      })}
    </CalendarGrid>
  );
};
