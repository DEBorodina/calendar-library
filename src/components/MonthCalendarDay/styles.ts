import styled from 'styled-components';

import { CellProps } from './types';

const CELL_BORDER_RADIUS = 8;

const DATE_COLOR = '#333333';
const SELECTED_DATE_COLOR = '#FFFFFF';

const CURRENT_DATE_BACKGROUND_COLOR = '#F1F1F1';
//const SELECTED_DATE_BACKGROUND_COLOR = '#2F80ED';

//const CELL_SIZE = 30; //100; //30
//const FONT_SIZE = 16; //54; //16

export const Cell = styled.div<CellProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
  cursor: ${(props) => (props.isInValidRange ? 'pointer' : 'auto')};
  font-size: inherit;
  border-radius: ${CELL_BORDER_RADIUS}px;
  background-color: ${(props) => {
    if (props.isSelected) return props.theme.mainColor;
    if (props.isCurrent) return CURRENT_DATE_BACKGROUND_COLOR;
    else return 'transparent';
  }};
  color: ${(props) => {
    if (props.isSelected) return SELECTED_DATE_COLOR;
    if (props.isHoliday) return props.theme.holidayColor;
    if (props.isWeekend) return props.theme.mainColor;
    else return DATE_COLOR;
  }};
  opacity: ${(props) => {
    let opacity = 1;
    if (!props.isCurrentMonth) opacity -= 0.5;
    if (!props.isInValidRange) opacity -= 0.3;
    return opacity;
  }};
`;
