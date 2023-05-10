import styled from 'styled-components';

import { CellProps } from './types';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dot = styled.div`
  position: absolute;
  opacity: 0.5;
  font-color: inherit;
  font-size: ${(props) => props.theme.DOT_SIZE}px;
  bottom: calc(90% - ${(props) => props.theme.DOT_BOTTOM_OFFSET}px);
`;

export const Cell = styled.div<CellProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.isInValidRange ? 'pointer' : 'auto')};
  font-size: inherit;

  width: ${(props) =>
    props.isInRange || props.isEndValue || props.isStartValue ? 100 : 90}%;
  height: 90%;

  border-top-left-radius: ${(props) =>
    props.isInRange || props.isEndValue ? 0 : props.theme.CELL_BORDER_RADIUS}px;
  border-bottom-left-radius: ${(props) =>
    props.isInRange || props.isEndValue ? 0 : props.theme.CELL_BORDER_RADIUS}px;
  border-top-right-radius: ${(props) =>
    props.isInRange || props.isStartValue
      ? 0
      : props.theme.CELL_BORDER_RADIUS}px;
  border-bottom-right-radius: ${(props) =>
    props.isInRange || props.isStartValue
      ? 0
      : props.theme.CELL_BORDER_RADIUS}px;

  background-color: ${(props) => {
    if (
      props.isSelected ||
      props.isInRange ||
      props.isEndValue ||
      props.isStartValue
    ) {
      return props.theme.mainColor;
    }
    if (props.isCurrent) {
      return props.theme.CURRENT_DATE_BACKGROUND_COLOR;
    } else {
      return 'transparent';
    }
  }};

  color: ${(props) => {
    if (
      props.isSelected ||
      props.isInRange ||
      props.isEndValue ||
      props.isStartValue
    ) {
      return props.theme.SELECTED_DATE_COLOR;
    }

    if (props.isHoliday) {
      return props.theme.holidayColor;
    }
    if (props.isWeekend) {
      return props.theme.mainColor;
    } else {
      return props.theme.FONT_COLOR;
    }
  }};

  opacity: ${(props) => {
    let opacity = 1;
    if (!props.isSelectedMonth) {
      opacity -= 0.5;
    }
    if (!props.isInValidRange) {
      opacity -= 0.3;
    }
    if (props.isInRange) {
      opacity -= 0.4;
    }
    return opacity;
  }};
`;
