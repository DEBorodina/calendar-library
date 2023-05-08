import styled from 'styled-components';

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
  height: ${(props) => props.theme.size.cellSize}px;
  width: ${(props) => props.theme.size.cellSize}px;
  font-size: ${(props) => props.theme.size.fontSize}px;
`;
