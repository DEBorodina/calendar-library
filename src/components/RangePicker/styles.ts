import styled from 'styled-components';

const TEXT_COLOR = '#333333';
const LABEL_FONT_SIZE = 16;
const LABEL_MARGIN_BOTTOM = 10;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.p`
  font-size: ${LABEL_FONT_SIZE}px;
  color: ${TEXT_COLOR};
  margin-bottom: ${LABEL_MARGIN_BOTTOM}px;
`;
