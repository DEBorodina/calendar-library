import React, { useLayoutEffect, useState } from 'react';

import { months } from '@/constants/months';

import { ControlPanel } from '../ControlPanel';
import { MonthCalendarGrid } from '../MonthCalendarGrid';
import { Calendar } from './styles';
import { MonthCalendarProps } from './types';

export const MonthCalendar: React.FC<MonthCalendarProps> = ({
  value,
  onChange,
}) => {
  const handlePreviousMonth = () => {
    if (panelMonth == 0) {
      setPanelMonth(11);
      setPanelYear(panelYear - 1);
    } else setPanelMonth(panelMonth - 1);
  };

  const handleNextMonth = () => {
    if (panelMonth == 11) {
      setPanelMonth(0);
      setPanelYear(panelYear + 1);
    } else setPanelMonth(panelMonth + 1);
  };

  const [panelYear, setPanelYear] = useState(value.getFullYear());
  const [panelMonth, setPanelMonth] = useState(value.getMonth());

  useLayoutEffect(() => {
    setPanelYear(value.getFullYear());
    setPanelMonth(value.getMonth());
  }, [value]);

  return (
    <Calendar>
      <ControlPanel
        handlePrevious={handlePreviousMonth}
        handleNext={handleNextMonth}
        title={`${months[panelMonth]} ${panelYear}`}
      />
      <MonthCalendarGrid
        panelYear={panelYear}
        panelMonth={panelMonth}
        onChange={onChange}
        value={value}
      />
    </Calendar>
  );
};
