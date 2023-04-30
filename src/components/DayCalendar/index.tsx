import React, { useEffect, useState } from 'react';

import { months } from '@/constants/months';

import { ControlPanel } from '../ControlPanel';
import { MonthCalendarDay } from '../MonthCalendarDay';
import { Calendar } from './styles';
import { DayCalendarProps } from './types';

export const DayCalendar: React.FC<DayCalendarProps> = ({
  value,
  onChange,
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const handlePreviousDay = () => {
    const previous = new Date(currentValue.getTime());
    previous.setDate(currentValue.getDate() - 1);

    setCurrentValue(previous);
  };

  const handleNextDay = () => {
    const next = new Date(currentValue.getTime());
    next.setDate(currentValue.getDate() + 1);

    setCurrentValue(next);
  };

  return (
    <Calendar>
      <ControlPanel
        handlePrevious={handlePreviousDay}
        handleNext={handleNextDay}
        title={`${
          months[currentValue.getMonth()]
        } ${currentValue.getFullYear()}`}
      />
      <MonthCalendarDay
        date={currentValue}
        selectedDate={value}
        panelMonth={currentValue.getMonth()}
        onClick={onChange}
      />
    </Calendar>
  );
};
