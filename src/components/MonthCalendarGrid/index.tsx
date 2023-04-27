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
}) => {
  const dateCells = useMemo(() => {
    return MonthCalendarHelper.getMonthToDisplay(panelYear, panelMonth);
  }, [panelMonth, panelYear]);

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
