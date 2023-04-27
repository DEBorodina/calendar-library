import styled from 'styled-components';

import { MonthCalendarCell } from '@/styles/common';

import { CellProps } from './types';

const CELL_BORDER_RADIUS = 8;

const DATE_COLOR = '#333333';
const SELECTED_DATE_COLOR = '#FFFFFF';

const CURRENT_DATE_BACKGROUND_COLOR = '#F1F1F1';
const SELECTED_DATE_BACKGROUND_COLOR = '#2F80ED';

const CELL_SIZE = 30;

export const Container = styled(MonthCalendarCell)`
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
`;

export const Cell = styled.div<CellProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
  cursor: pointer;
  border-radius: ${CELL_BORDER_RADIUS}px;
  background-color: ${(props) => {
    if (props.isSelected) return SELECTED_DATE_BACKGROUND_COLOR;
    if (props.isCurrent) return CURRENT_DATE_BACKGROUND_COLOR;
    else return 'transparent';
  }};
  color: ${(props) => {
    if (props.isSelected) return SELECTED_DATE_COLOR;
    else return DATE_COLOR;
  }};
  opacity: ${(props) => (props.isCurrentMonth ? 1 : 0.5)}}
`;
