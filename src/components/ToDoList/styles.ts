import styled from 'styled-components';

import { ContainerProps } from './types';

const TODOLIST_BORDER_COLOR = '#E1E1E1';
const TODOLIST_BORDER_RADIUS = 8;
const TODOLIST_BORDER_WIDTH = 1;
const TODOLIST_PADDING = 10;
const TODOLIST_BACKGROUND_COLOR = '#ffffff';
const TODOLIST_Z_INDEX = 99999;

const DATE_SIZE = 14;
const DATE_COLOR = '#333333';

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: ${(props) => props.theme.size.cellSize}px;
  top: 100%;
  left: ${(props) => {
    return -props.index * props.theme.size.cellSize;
  }}px;
  font-size: ${DATE_SIZE}px;
  width: ${(props) => props.theme.size.width * 0.9}px;
  border-radius: ${TODOLIST_BORDER_RADIUS}px;
  border: ${TODOLIST_BORDER_COLOR} ${TODOLIST_BORDER_WIDTH}px solid;
  padding: ${TODOLIST_PADDING}px;
  background-color: ${TODOLIST_BACKGROUND_COLOR};
  z-index: ${TODOLIST_Z_INDEX};
  color: ${DATE_COLOR};
`;
