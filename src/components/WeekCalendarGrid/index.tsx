import React, { useMemo } from 'react';

import { daysOfWeek } from '@/constants/daysOfWeek';
import { MonthCalendarCell } from '@/styles/common';
import { WeekCalendarHelper } from '@/utils/WeekCalendarHelper';

import { MonthCalendarDay } from '../MonthCalendarDay';
import { CalendarGrid } from './styles';
import { WeekCalendarProps } from './types';

export const WeekCalendarGrid: React.FC<WeekCalendarProps> = ({
  panelMonth,
  panelYear,
  panelWeek,
  value,
  onChange,
}) => {
  const dateCells = useMemo(() => {
    return WeekCalendarHelper.getWeekToDisplay(
      panelYear,
      panelMonth,
      panelWeek
    );
  }, [panelMonth, panelYear, panelWeek]);
  return (
    <CalendarGrid>
      {daysOfWeek.map((day) => (
        <MonthCalendarCell key={day}>{day}</MonthCalendarCell>
      ))}
      {dateCells.map((date) => {
        const key = `${date.getDate()}\\${date.getMonth()}`;
        return (
          <MonthCalendarDay
            key={key}
            onClick={onChange}
            date={date}
            selectedDate={value}
            panelMonth={panelMonth}
          />
        );
      })}
    </CalendarGrid>
  );
};
