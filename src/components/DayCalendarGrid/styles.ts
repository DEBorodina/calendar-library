import styled from 'styled-components';

import { MonthCalendarCell } from '@/styles/common';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Container = styled(MonthCalendarCell)`
  font-size: ${(props) => (props.theme.size.fontSize as number) + 50}px;
  width: ${(props) => props.theme.DAY_CELL_SIZE}px;
  height: ${(props) => props.theme.DAY_CELL_SIZE}px;
  margin: 0 auto;
`;
