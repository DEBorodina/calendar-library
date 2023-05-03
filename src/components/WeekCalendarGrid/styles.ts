import styled from 'styled-components';

import { MonthCalendarCell } from '@/styles/common';

export const CalendarGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const Container = styled(MonthCalendarCell)`
  position: relative;
  font-size: ${(props) => props.theme.size.fontSize}px;
  margin: 0 auto;
`;
