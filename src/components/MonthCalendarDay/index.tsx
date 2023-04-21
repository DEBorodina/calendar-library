import React from 'react';

import { CalendarHelper } from '@/utils/CalendarHelper';

import { Cell, Container } from './styles';
import { MonthCalendarDayProps } from './types';

export const MonthCalendarDay: React.FC<MonthCalendarDayProps> = ({
  date,
  selectedDate,
  panelMonth,
  onClick,
}) => {
  const handleClick = () => {
    onClick(date);
  };

  const currentDate = new Date(Date.now());

  const isSelected = CalendarHelper.isDatesEqual(date, selectedDate);
  const isCurrent = CalendarHelper.isDatesEqual(date, currentDate);
  const isCurrentMonth = date.getMonth() === panelMonth;

  return (
    <Container>
      <Cell
        onClick={handleClick}
        isSelected={isSelected}
        isCurrent={isCurrent}
        isCurrentMonth={isCurrentMonth}
      >
        {date.getDate()}
      </Cell>
    </Container>
  );
};
