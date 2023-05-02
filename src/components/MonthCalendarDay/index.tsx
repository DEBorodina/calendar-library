import React from 'react';

import { CalendarHelper } from '@/utils/CalendarHelper';
import { DateValidator } from '@/utils/DateValidator';

import { Cell } from './styles';
import { MonthCalendarDayProps } from './types';

export const MonthCalendarDay: React.FC<MonthCalendarDayProps> = ({
  date,
  selectedDate,
  panelMonth,
  onClick,
  showWeekends,
  holidays,
  minDate,
  maxDate,
}) => {
  const currentDate = new Date(Date.now());

  const isSelected = CalendarHelper.isDatesEqual(date, selectedDate);
  const isCurrent = CalendarHelper.isDatesEqual(date, currentDate);
  const isCurrentMonth = date.getMonth() === panelMonth;
  const isInValidRange = DateValidator.isInValidRange(date, minDate, maxDate);
  let isWeekend = false;
  if (showWeekends) {
    isWeekend = date.getDay() === 0 || date.getDay() === 6;
  }

  let isHoliday = false;
  if (holidays) {
    const holiday = holidays.find((holiday) =>
      CalendarHelper.isDatesEqual(holiday, date)
    );
    isHoliday = holiday ? true : false;
  }

  const handleClick = () => {
    if (isInValidRange) {
      onClick(date);
    }
  };

  return (
    <Cell
      onClick={handleClick}
      isSelected={isSelected}
      isCurrent={isCurrent}
      isCurrentMonth={isCurrentMonth}
      isWeekend={isWeekend}
      isHoliday={isHoliday}
      isInValidRange={isInValidRange}
    >
      {date.getDate()}
    </Cell>
  );
};
