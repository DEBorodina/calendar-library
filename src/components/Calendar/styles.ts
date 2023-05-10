import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: ${(props) => props.theme.CALENDAR_TOP_OFFSET}px;
  z-index: ${(props) => props.theme.CALENDAR_Z_INDEX};
  border-radius: ${(props) => props.theme.CALENDAR_BORDER_RADIUS}px;
  border: ${(props) => props.theme.CALENDAR_BORDER_COLOR}
    ${(props) => props.theme.CALENDAR_BORDER_WIDTH}px solid;
  padding: ${(props) => props.theme.CALENDAR_PADDING}px;
  background-color: ${(props) => props.theme.CALENDAR_BACKGROUND_COLOR};
`;
