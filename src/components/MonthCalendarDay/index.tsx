import React from 'react';

import { usePopup } from '@/hooks';
import { CalendarHelper } from '@/utils/CalendarHelper';
import { DateValidator } from '@/utils/DateValidator';
import { getFromLocalStorage } from '@/utils/localStorage';

import { ToDoList } from '../ToDoList';
import { ToDo } from '../ToDoList/types';
import { Cell, Dot, Wrapper } from './styles';
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
  endDate,
  startDate,
  withToDoList,
  index,
}) => {
  const [popUp, showPopup, setShowPopup] = usePopup();

  const currentDate = new Date(Date.now());

  const isCurrent = CalendarHelper.isDatesEqual(date, currentDate);
  const isSelected = CalendarHelper.isDatesEqual(date, selectedDate);
  const isSelectedMonth = date.getMonth() === panelMonth;
  const isInValidRange = DateValidator.isInValidRange(date, minDate, maxDate);

  let isWeekend = false;
  if (showWeekends) isWeekend = date.getDay() === 0 || date.getDay() === 6;

  let isHoliday = false;
  if (holidays) {
    const holiday = holidays.find((holiday) =>
      CalendarHelper.isDatesEqual(holiday, date)
    );
    isHoliday = holiday ? true : false;
  }

  let isEndValue = false;
  let isStartValue = false;
  let isInRange = false;

  if (endDate && CalendarHelper.isDatesEqual(endDate, date)) isEndValue = true;
  if (isSelected && startDate) isEndValue = true;

  if (startDate && CalendarHelper.isDatesEqual(startDate, date))
    isStartValue = true;
  if (isSelected && endDate) isStartValue = true;

  if (!isSelected && !isStartValue && !isEndValue && selectedDate) {
    if (
      startDate &&
      DateValidator.isInValidRange(date, startDate, selectedDate)
    )
      isInRange = true;

    if (endDate && DateValidator.isInValidRange(date, selectedDate, endDate))
      isInRange = true;
  }

  let hasTodos = false;
  const todos = getFromLocalStorage(`todos${date.getTime()}`) as ToDo[];
  if (todos && todos.length > 0) {
    hasTodos = true;
  }

  const handleClick = () => {
    if (isInValidRange) onClick(date);
  };

  const onMouseEnter = () => {
    if (withToDoList) setShowPopup(true);
  };

  const onMouseOver = () => {
    if (withToDoList) setShowPopup(false);
  };

  return (
    <Wrapper ref={popUp} onMouseEnter={onMouseEnter} onMouseLeave={onMouseOver}>
      <Cell
        aria-label="cell"
        onClick={handleClick}
        isSelected={isSelected}
        isCurrent={isCurrent}
        isSelectedMonth={isSelectedMonth}
        isWeekend={isWeekend}
        isHoliday={isHoliday}
        isInValidRange={isInValidRange}
        isInRange={isInRange}
        isEndValue={isEndValue}
        isStartValue={isStartValue}
      >
        {hasTodos && <Dot>.</Dot>}
        {date.getDate()}
      </Cell>
      {showPopup && <ToDoList date={date} index={index} />}
    </Wrapper>
  );
};
