import styled from 'styled-components';

const CALENDAR_TOP_OFFSET = 10;

const CALENDAR_BORDER_COLOR = '#E1E1E1';
const CALENDAR_BORDER_RADIUS = 8;
const CALENDAR_BORDER_WIDTH = 1;

const CALENDAR_Z_INDEX = 9999;

const CALENDAR_PADDING = 10;

const CALENDAR_BACKGROUND_COLOR = '#ffffff';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: ${CALENDAR_TOP_OFFSET}px;
  z-index: ${CALENDAR_Z_INDEX};
  border-radius: ${CALENDAR_BORDER_RADIUS}px;
  border: ${CALENDAR_BORDER_COLOR} ${CALENDAR_BORDER_WIDTH}px solid;
  padding: ${CALENDAR_PADDING}px;
  background-color: ${CALENDAR_BACKGROUND_COLOR};
`;
