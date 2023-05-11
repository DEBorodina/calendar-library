import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.p`
  font-size: ${(props) => props.theme.BIG_LABEL_FONT_SIZE}px;
  color: ${(props) => props.theme.FONT_COLOR};
  margin-bottom: ${(props) => props.theme.BIG_LABEL_MARGIN_BOTTOM}px;
`;
