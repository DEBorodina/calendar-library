import styled from 'styled-components';

import { CellProps } from './types';

const CELL_BORDER_RADIUS = 8;

const DATE_COLOR = '#333333';
const SELECTED_DATE_COLOR = '#FFFFFF';

const CURRENT_DATE_BACKGROUND_COLOR = '#F1F1F1';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Cell = styled.div<CellProps>`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) =>
    props.isInRange || props.isEndValue || props.isStartValue ? 100 : 90}%;
  height: 90%;
  cursor: ${(props) => (props.isInValidRange ? 'pointer' : 'auto')};
  font-size: inherit;

  border-top-left-radius: ${(props) =>
    props.isInRange || props.isEndValue ? 0 : CELL_BORDER_RADIUS}px;
  border-bottom-left-radius: ${(props) =>
    props.isInRange || props.isEndValue ? 0 : CELL_BORDER_RADIUS}px;

  border-top-right-radius: ${(props) =>
    props.isInRange || props.isStartValue ? 0 : CELL_BORDER_RADIUS}px;
  border-bottom-right-radius: ${(props) =>
    props.isInRange || props.isStartValue ? 0 : CELL_BORDER_RADIUS}px;

  background-color: ${(props) => {
    if (
      props.isSelected ||
      props.isInRange ||
      props.isEndValue ||
      props.isStartValue
    )
      return props.theme.mainColor;
    if (props.isCurrent) return CURRENT_DATE_BACKGROUND_COLOR;
    else return 'transparent';
  }};
  color: ${(props) => {
    if (
      props.isSelected ||
      props.isInRange ||
      props.isEndValue ||
      props.isStartValue
    )
      return SELECTED_DATE_COLOR;
    if (props.isHoliday) return props.theme.holidayColor;
    if (props.isWeekend) return props.theme.mainColor;
    else return DATE_COLOR;
  }};
  opacity: ${(props) => {
    let opacity = 1;
    if (!props.isCurrentMonth) opacity -= 0.5;
    if (!props.isInValidRange) opacity -= 0.3;
    if (props.isInRange) opacity -= 0.4;
    return opacity;
  }};
`;
