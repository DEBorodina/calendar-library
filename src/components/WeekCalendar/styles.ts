import styled from 'styled-components';

const CALENDAR_TOP_OFFSET = 52;

const CALENDAR_BORDER_COLOR = '#E1E1E1';
const CALENDAR_BORDER_RADIUS = 8;
const CALENDAR_BORDER_WIDTH = 1;

const CALENDAR_Z_INDEX = 9999;

const CALENDAR_PADDING = 10;

export const Calendar = styled.div`
  width: 100%;
  position: absolute;
  top: ${CALENDAR_TOP_OFFSET}px;
  z-index: ${CALENDAR_Z_INDEX};
  border-radius: ${CALENDAR_BORDER_RADIUS}px;
  border-color: ${CALENDAR_BORDER_COLOR};
  border-width: ${CALENDAR_BORDER_WIDTH}px;
  border-style: solid;
  padding: ${CALENDAR_PADDING}px;
`;
