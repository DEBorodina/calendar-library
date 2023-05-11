import styled from 'styled-components';

export const Container = styled.div`
  width: ${(props) => props.theme.size.width}px;
  margin-bottom: ${(props) => props.theme.CALENDAR_MARGIN_BOTTOM}px;
`;

export const Label = styled.p`
  font-size: ${(props) => props.theme.LABEL_FONT_SIZE}px;
  color: ${(props) => props.theme.FONT_COLOR};
  margin-bottom: ${(props) => props.theme.ERROR_LABEL_FONT_MARGIN}px;
  margin-left: ${(props) => props.theme.ERROR_LABEL_FONT_MARGIN * 2}px;
`;

export const ErrorText = styled.p`
  font-size: ${(props) => props.theme.ERROR_FONT_SIZE}px;
  color: ${(props) => props.theme.errorColor};
  margin-top: ${(props) => props.theme.ERROR_LABEL_FONT_MARGIN}px;
  margin-left: ${(props) => props.theme.ERROR_LABEL_FONT_MARGIN}px;
`;
