import styled from 'styled-components';

const CELL_SIDE = 30;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const MonthCalendarCell = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${CELL_SIDE}px;
  width: ${CELL_SIDE}px;
`;
