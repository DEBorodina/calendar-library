import styled from 'styled-components';

import { MonthCalendarCell } from '@/styles/common';

export const Container = styled(MonthCalendarCell)`
  font-size: ${(props) => (props.theme.size.fontSize as number) + 50}px;
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;
