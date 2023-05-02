import styled from 'styled-components';

const INPUT_HEIGHT = 42;

const INPUT_BORDER_RADIUS = 8;
const INPUT_BORDER_COLOR = '#dddddd';
const INPUT_BORDER_SIZE = 1;

const INPUT_TEXT_COLOR = '#333333';
//const INPUT_PLACEHOLDER_COLOR = '#bbbbbb';

const INPUT_HORIZONTAL_PADDINGS = 16;

export const InputContainer = styled.div`
  width: 100%;
  height: ${INPUT_HEIGHT}px;
  border-radius: ${INPUT_BORDER_RADIUS}px;
  border: ${INPUT_BORDER_COLOR} ${INPUT_BORDER_SIZE}px solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${INPUT_HORIZONTAL_PADDINGS}px;
  padding-right: ${INPUT_HORIZONTAL_PADDINGS}px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const Input = styled.input`
  width: 70%;
  outline: none;
  border: none;
  color: ${INPUT_TEXT_COLOR};
  background-color: transparent;

  &::placeholder {
    opacity: 0.5;
  }
`;
