import React from 'react';

import { usePopup } from '@/hooks';
import { CalendarHelper } from '@/utils/CalendarHelper';
import { DateValidator } from '@/utils/DateValidator';

import { ToDoList } from '../ToDoList';
import { Cell, Wrapper } from './styles';
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

  const isSelected = CalendarHelper.isDatesEqual(date, selectedDate);

  let isEndValue = false;
  if (endDate && CalendarHelper.isDatesEqual(endDate, date)) isEndValue = true;
  if (isSelected && startDate) isEndValue = true;

  let isStartValue = false;
  if (startDate && CalendarHelper.isDatesEqual(startDate, date))
    isStartValue = true;
  if (isSelected && endDate) isStartValue = true;

  const isCurrent = CalendarHelper.isDatesEqual(date, currentDate);
  const isCurrentMonth = date.getMonth() === panelMonth;
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

  let isInRange = false;
  if (!isSelected && !isStartValue && !isEndValue && selectedDate) {
    if (
      startDate &&
      DateValidator.isInValidRange(date, startDate, selectedDate)
    )
      isInRange = true;

    if (endDate && DateValidator.isInValidRange(date, selectedDate, endDate))
      isInRange = true;
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
        onClick={handleClick}
        isSelected={isSelected}
        isCurrent={isCurrent}
        isCurrentMonth={isCurrentMonth}
        isWeekend={isWeekend}
        isHoliday={isHoliday}
        isInValidRange={isInValidRange}
        isInRange={isInRange}
        isEndValue={isEndValue}
        isStartValue={isStartValue}
      >
        {date.getDate()}
      </Cell>
      {showPopup && <ToDoList date={date} index={index} />}
    </Wrapper>
  );
};
