import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  height: ${(props) => props.theme.INPUT_HEIGHT}px;
  border-radius: ${(props) => props.theme.INPUT_BORDER_RADIUS}px;
  border: ${(props) => props.theme.INPUT_BORDER_COLOR}
    ${(props) => props.theme.INPUT_BORDER_SIZE}px solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${(props) => props.theme.INPUT_HORIZONTAL_PADDINGS}px;
  padding-right: ${(props) => props.theme.INPUT_HORIZONTAL_PADDINGS}px;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  color: ${(props) => props.theme.FONT_COLOR};
  background-color: transparent;

  &::placeholder {
    opacity: 0.5;
  }
`;
