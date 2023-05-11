import React, { useEffect, useMemo, useState } from 'react';

import { months } from '@/constants/months';
import { DecoratorService } from '@/utils/decorators/DecoratorService';

import { ControlPanel } from '../ControlPanel';
import { Container, Wrapper } from './styles';
import { CalendarProps } from './types';

export const Calendar: React.FC<CalendarProps> = ({
  value,
  onChange,
  ...settings
}) => {
  const [calendar, setCalendar] = useState(
    DecoratorService.configCalendar(settings)
  );
  const [panelState, setPanelState] = useState(calendar.getState(value));

  const CalendarGrid = useMemo(() => {
    return calendar.getGrid();
  }, [calendar]);

  const handlePrevious = () => {
    const newState = calendar.handlePrevious(panelState);
    setPanelState(newState);
  };

  const handleNext = () => {
    const newState = calendar.handleNext(panelState);
    setPanelState(newState);
  };

  useEffect(() => {
    setPanelState(calendar.getState(value));
  }, [value]);

  const {
    type,
    weekStart,
    showWeekends,
    holidays,
    minDate,
    maxDate,
    endDate,
    startDate,
    withToDoList,
  } = settings;
  useEffect(() => {
    const newCalendar = DecoratorService.configCalendar(settings);
    setCalendar(newCalendar);
    setPanelState(newCalendar.getState(value));
  }, [
    type,
    weekStart,
    showWeekends,
    holidays,
    minDate,
    maxDate,
    endDate,
    startDate,
    withToDoList,
  ]);

  return (
    <Wrapper aria-label="calendar">
      <Container>
        <ControlPanel
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          title={`${months[panelState.panelMonth]} ${panelState.panelYear}`}
        />
        <CalendarGrid {...panelState} onChange={onChange} value={value} />
      </Container>
    </Wrapper>
  );
};
