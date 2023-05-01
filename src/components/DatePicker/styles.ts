import styled from 'styled-components';

const DATE_PICKER_WIDTH = 250; //250;

const TEXT_COLOR = '#333333';
const ERROR_COLOR = 'red';

export const Container = styled.div`
  width: ${DATE_PICKER_WIDTH}px;
  position: relative;
`;

export const Label = styled.p`
  font-size: 15px;
  color: ${TEXT_COLOR};
  margin-bottom: 5px;
  margin-left: 5px;
`;

export const ErrorText = styled.p`
  font-size: 12px;
  color: ${ERROR_COLOR};
  margin-top: 2px;
  margin-left: 2px;
`;
