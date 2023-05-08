import styled from 'styled-components';

const CONTAINER_PADDINGS = 5;
//const TITLE_FONT_SIZE = 14;
const TITLE_FONT_WEIGHT = 700;
const DATE_COLOR = '#333333';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: ${CONTAINER_PADDINGS}px;
`;

export const Title = styled.p`
  color: ${DATE_COLOR};
  font-size: ${(props) => props.theme.size.fontSize}px;
  font-weight: ${TITLE_FONT_WEIGHT};
`;
