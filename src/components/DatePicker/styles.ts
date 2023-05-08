import styled from 'styled-components';

const TEXT_COLOR = '#333333';
const TEXT_MARGIN = 2;
const LABEL_FONT_SIZE = 14;
const ERROR_FONT_SIZE = 12;

const CALENDAR_MARGIN_BOTTOM = 10;

export const Container = styled.div`
  width: ${(props) => props.theme.size.width}px;
  margin-bottom: ${CALENDAR_MARGIN_BOTTOM}px;
`;

export const Label = styled.p`
  font-size: ${LABEL_FONT_SIZE}px;
  color: ${TEXT_COLOR};
  margin-bottom: ${TEXT_MARGIN}px;
  margin-left: ${TEXT_MARGIN * 2}px;
`;

export const ErrorText = styled.p`
  font-size: ${ERROR_FONT_SIZE}px;
  color: ${(props) => props.theme.errorColor};
  margin-top: ${TEXT_MARGIN}px;
  margin-left: ${TEXT_MARGIN}px;
`;
