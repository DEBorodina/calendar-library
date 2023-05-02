import styled from 'styled-components';

const TEXT_COLOR = '#333333';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.p`
  font-size: 16px;
  color: ${TEXT_COLOR};
  margin-bottom: 10px;
`;
