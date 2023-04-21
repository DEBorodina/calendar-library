import styled from 'styled-components';

const CONTAINER_PADDINGS = 5;
const TITLE_FONT_SIZE = 14;
const TITLE_FONT_WEIGHT = 700;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: ${CONTAINER_PADDINGS}px;
`;

export const Title = styled.p`
  font-size: ${TITLE_FONT_SIZE}px;
  font-weight: ${TITLE_FONT_WEIGHT};
`;
