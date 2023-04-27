import React, { useLayoutEffect, useState } from 'react';

import { months } from '@/constants/months';
import { WeekCalendarHelper } from '@/utils/WeekCalendarHelper';

import { ControlPanel } from '../ControlPanel';
import { WeekCalendarGrid } from '../WeekCalendarGrid';
import { Calendar } from './styles';
import { WeekCalendarProps } from './types';

export const WeekCalendar: React.FC<WeekCalendarProps> = ({
  value,
  onChange,
}) => {
  const [panelYear, setPanelYear] = useState(value.getFullYear());
  const [panelMonth, setPanelMonth] = useState(value.getMonth());
  const [panelWeek, setPanelWeek] = useState(
    WeekCalendarHelper.getCurrentWeek(value)
  );

  const handlePreviousWeek = () => {
    if (panelWeek === 0) {
      const [newMonth, newYear] = handlePreviousMonth();
      const numberOfWeeksInAMonth = WeekCalendarHelper.getNumberOfWeeksInMonth(
        newYear,
        newMonth
      );
      let previousWeekNumber = numberOfWeeksInAMonth - 1;
      const newWeekDays = WeekCalendarHelper.getWeekToDisplay(
        newYear,
        newMonth,
        previousWeekNumber
      );
      const lastWeekDay = newWeekDays[newWeekDays.length - 1];
      if (lastWeekDay.getMonth() === panelMonth) {
        previousWeekNumber--;
      }
      setPanelWeek(previousWeekNumber);
    } else setPanelWeek(panelWeek - 1);
  };

  const handleNextWeek = () => {
    const numberOfWeeksInAMonth = WeekCalendarHelper.getNumberOfWeeksInMonth(
      panelYear,
      panelMonth
    );
    if (panelWeek === numberOfWeeksInAMonth - 1) {
      let nextWeekNumber = 0;
      const [newMonth, newYear] = handleNextMonth();
      const newWeekDays = WeekCalendarHelper.getWeekToDisplay(
        newYear,
        newMonth,
        0
      );
      const firstWeekDay = newWeekDays[0];
      if (firstWeekDay.getMonth() === panelMonth) {
        nextWeekNumber++;
      }
      setPanelWeek(nextWeekNumber);
    } else setPanelWeek(panelWeek + 1);
  };

  const handlePreviousMonth = () => {
    if (panelMonth == 0) {
      setPanelMonth(11);
      setPanelYear(panelYear - 1);
      return [11, panelYear - 1];
    } else {
      setPanelMonth(panelMonth - 1);
      return [panelMonth - 1, panelYear];
    }
  };

  const handleNextMonth = () => {
    if (panelMonth == 11) {
      setPanelMonth(0);
      setPanelYear(panelYear + 1);
      return [0, panelYear + 1];
    } else setPanelMonth(panelMonth + 1);
    return [panelMonth + 1, panelYear];
  };

  useLayoutEffect(() => {
    setPanelYear(value.getFullYear());
    setPanelMonth(value.getMonth());
    setPanelWeek(WeekCalendarHelper.getCurrentWeek(value));
  }, [value]);

  return (
    <Calendar>
      <ControlPanel
        handlePrevious={handlePreviousWeek}
        handleNext={handleNextWeek}
        title={`${months[panelMonth]} ${panelYear}`}
      />
      <WeekCalendarGrid
        panelYear={panelYear}
        panelMonth={panelMonth}
        panelWeek={panelWeek}
        onChange={onChange}
        value={value}
      />
    </Calendar>
  );
};
