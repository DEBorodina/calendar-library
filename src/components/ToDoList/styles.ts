import styled from 'styled-components';

import { ContainerProps } from './types';

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: ${(props) => props.theme.size.cellSize}px;
  top: 100%;
  left: ${(props) => {
    return -props.index * props.theme.size.cellSize;
  }}px;
  font-size: ${(props) => props.theme.DATE_FONT_SIZE}px;
  width: ${(props) => props.theme.size.width * 0.9}px;
  border-radius: ${(props) => props.theme.TODO_BORDER_RADIUS}px;
  border: ${(props) => props.theme.TODO_BORDER_COLOR}
    ${(props) => props.theme.TODO_BORDER_SIZE}px solid;
  padding: ${(props) => props.theme.TODO_PADDINGS}px;
  background-color: ${(props) => props.theme.TODO_BACKGROUND_COLOR};
  z-index: ${(props) => props.theme.TODO_Z_INDEX};
  color: ${(props) => props.theme.FONT_COLOR};
`;
