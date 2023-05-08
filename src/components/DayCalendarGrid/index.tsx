import React from 'react';

import { MonthCalendarDay } from '../MonthCalendarDay';
import { Container, Wrapper } from './styles';
import { DayCalendarProps } from './types';

export const DayCalendarGrid: React.FC<DayCalendarProps> = ({
  panelValue,
  value,
  onChange,
  ...settings
}) => (
  <Wrapper>
    <Container>
      <MonthCalendarDay
        index={0}
        date={panelValue}
        selectedDate={value}
        onClick={onChange}
        {...settings}
      />
    </Container>
  </Wrapper>
);
