import styled from 'styled-components';

import { ContainerProps } from './types';

const CALENDAR_BORDER_COLOR = '#E1E1E1';
const CALENDAR_BORDER_RADIUS = 8;
const CALENDAR_BORDER_WIDTH = 1;

const CALENDAR_PADDING = 10;

const DATE_COLOR = '#333333';

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: ${(props) => props.theme.size.cellSize}px;
  top: calc(100%);
  left: ${(props) => {
    return -props.index * props.theme.size.cellSize - 10;
  }}px;
  font-size: 14px;
  width: ${(props) => props.theme.size.width}px;
  border-radius: ${CALENDAR_BORDER_RADIUS}px;
  border-color: ${CALENDAR_BORDER_COLOR};
  border-width: ${CALENDAR_BORDER_WIDTH}px;
  border-style: solid;
  padding: ${CALENDAR_PADDING}px;
  background-color: #ffffff;
  opacity: 1;
  z-index: 9999;
  padding-bottom: 20px;
  color: ${DATE_COLOR};
`;

export const Title = styled.p``;
