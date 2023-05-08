import styled from 'styled-components';

const INPUT_BORDER_RADIUS = 8;
const INPUT_BORDER_COLOR = '#dddddd';
const INPUT_BORDER_SIZE = 1;

const INPUT_PADDING = 5;

const FORM_PADDING = 10;

const FONT_COLOR = '#333333';
const FONT_SIZE = 12;

const BUTTON_COLOR = '#aaaaaa';
const BUTTON_FONT_SIZE = 20;
const BUTTON_SIZE = 20;
const BUTTON_MARGIN_LEFT = 10;

export const Form = styled.form`
  width: 100%;
  padding-top: ${FORM_PADDING}px;
  padding-bottom: ${FORM_PADDING}px;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 80%;
  color: ${FONT_COLOR};
  outline: none;
  border-radius: ${INPUT_BORDER_RADIUS}px;
  border: ${INPUT_BORDER_COLOR} ${INPUT_BORDER_SIZE}px solid;
  padding-left: ${INPUT_PADDING}px;
  padding-right: ${INPUT_PADDING}px;
  font-size: ${FONT_SIZE}px;

  &::placeholder {
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: ${BUTTON_COLOR} 1px solid;
  background-color: transparent;
  color: ${BUTTON_COLOR};
  font-size: ${BUTTON_FONT_SIZE}px;
  width: ${BUTTON_SIZE}px;
  height: ${BUTTON_SIZE}px;
  margin-left: ${BUTTON_MARGIN_LEFT}px;

  &:hover {
    cursor: pointer;
  }
`;
