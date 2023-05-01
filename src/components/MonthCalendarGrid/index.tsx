import React, { useMemo } from 'react';

import { daysOfWeek } from '@/constants/daysOfWeek';
import { MonthCalendarCell } from '@/styles/common';
import { MonthCalendarHelper } from '@/utils/MonthCalendarHelper';

import { MonthCalendarDay } from '../MonthCalendarDay';
import { CalendarGrid } from './styles';
import { MonthCalendarProps } from './types';

export const MonthCalendarGrid: React.FC<MonthCalendarProps> = ({
  panelMonth,
  panelYear,
  value,
  onChange,
  weekStart,
  showWeekends,
  holidays,
  minDate,
  maxDate,
  setErrors,
}) => {
  const dateCells = useMemo(() => {
    return MonthCalendarHelper.getMonthToDisplay(
      panelYear,
      panelMonth,
      weekStart
    );
  }, [panelMonth, panelYear, weekStart]);

  const weekDaysToDisplay = useMemo(() => {
    if (weekStart === 1) return [...daysOfWeek.slice(1), daysOfWeek[0]];
    else return daysOfWeek;
  }, [weekStart]);

  return (
    <CalendarGrid>
      {weekDaysToDisplay.map((day) => (
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
            showWeekends={showWeekends}
            holidays={holidays}
            minDate={minDate}
            maxDate={maxDate}
            setErrors={setErrors}
          />
        );
      })}
    </CalendarGrid>
  );
};
