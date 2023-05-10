import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  padding-top: ${(props) => props.theme.FORM_PADDING}px;
  padding-bottom: ${(props) => props.theme.FORM_PADDING}px;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 80%;
  color: ${(props) => props.theme.FONT_COLOR};
  outline: none;
  border-radius: ${(props) => props.theme.INPUT_BORDER_RADIUS}px;
  border: ${(props) => props.theme.INPUT_BORDER_COLOR}
    ${(props) => props.theme.INPUT_BORDER_SIZE}px solid;
  padding-left: ${(props) => props.theme.INPUT_PADDING}px;
  padding-right: ${(props) => props.theme.INPUT_PADDING}px;
  font-size: ${(props) => props.theme.FONT_SIZE}px;

  &::placeholder {
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: ${(props) => props.theme.BUTTON_COLOR} 1px solid;
  background-color: transparent;
  color: ${(props) => props.theme.BUTTON_COLOR};
  font-size: ${(props) => props.theme.BUTTON_FONT_SIZE}px;
  width: ${(props) => props.theme.BUTTON_SIZE}px;
  height: ${(props) => props.theme.BUTTON_SIZE}px;
  margin-left: ${(props) => props.theme.BUTTON_MARGIN_LEFT}px;

  &:hover {
    cursor: pointer;
  }
`;
