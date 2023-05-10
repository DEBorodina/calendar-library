import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.CONTROL_PANEL_PADDINGS}px;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.FONT_COLOR};
  font-size: ${(props) => props.theme.size.fontSize}px;
  font-weight: ${(props) => props.theme.CONTROL_PANEL_FONT_WEIGHT};
`;
