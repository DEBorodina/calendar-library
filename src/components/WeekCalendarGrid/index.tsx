import React, { useMemo } from 'react';

import { MonthCalendarCell } from '@/styles/common';
import { WeekCalendarHelper } from '@/utils/WeekCalendarHelper';

import { MonthCalendarDay } from '../MonthCalendarDay';
import { CalendarGrid, Container } from './styles';
import { WeekCalendarProps } from './types';

export const WeekCalendarGrid: React.FC<WeekCalendarProps> = ({
  panelMonth,
  panelYear,
  panelWeek,
  value,
  onChange,
  weekStart,
  ...settings
}) => {
  const dateCells = useMemo(() => {
    return WeekCalendarHelper.getWeekToDisplay(
      panelYear,
      panelMonth,
      panelWeek,
      weekStart
    );
  }, [panelMonth, panelYear, panelWeek, weekStart]);

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
