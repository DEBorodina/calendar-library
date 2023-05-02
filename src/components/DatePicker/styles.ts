import styled from 'styled-components';

const TEXT_COLOR = '#333333';

export const Container = styled.div`
  width: ${(props) => props.theme.size.width}px;
  margin-bottom: 15px;
`;

export const Label = styled.p`
  font-size: 14px;
  color: ${TEXT_COLOR};
  margin-bottom: 2px;
  margin-left: 5px;
`;

export const ErrorText = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.errorColor};
  margin-top: 2px;
  margin-left: 2px;
`;
