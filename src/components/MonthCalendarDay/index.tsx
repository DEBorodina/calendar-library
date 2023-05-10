import React from 'react';

import { usePopup } from '@/hooks';
import { DateCellService } from '@/utils/DayCellService';

import { ToDoList } from '../ToDoList';
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

  const dateService = new DateCellService(
    date,
    selectedDate,
    panelMonth,
    showWeekends,
    holidays,
    minDate,
    maxDate,
    endDate,
    startDate
  );
  const settings = dateService.getSettings();

  const handleClick = () => {
    if (settings.isInValidRange) {
      onClick(date);
    }
  };

  const onMouseEnter = () => {
    if (withToDoList) {
      setShowPopup(true);
    }
  };

  const onMouseOver = () => {
    if (withToDoList) {
      setShowPopup(false);
    }
  };

  return (
    <Wrapper ref={popUp} onMouseEnter={onMouseEnter} onMouseLeave={onMouseOver}>
      <Cell aria-label="cell" onClick={handleClick} {...settings}>
        {settings.hasTodos && <Dot>.</Dot>}
        {date.getDate()}
      </Cell>
      {showPopup && <ToDoList date={date} index={index} />}
    </Wrapper>
  );
};
