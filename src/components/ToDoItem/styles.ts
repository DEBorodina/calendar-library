import styled from 'styled-components';

const TODO_BORDER_RADIUS = 8;
const TODO_BORDER_COLOR = '#dddddd';
const TODO_BORDER_SIZE = 1;
const TODO_PADDING = 5;
const TODO_HEIGHT = 30;
const TODO_MARGIN_BOTTOM = 10;

const FONT_SIZE = 12;
const FONT_COLOR = ' #333333';

const BUTTONS_CONTAINER_WIDTH = 35;

const BUTTON_SIZE = 14;
const BUTTON_COLOR = '#aaaaaa';
const BUTTON_BORDER_SIZE = 1;

const MARK_POSITION_LEFT = 5;
const MARK_POSITION_BOTTOM = 3;
const MARK_WIDTH = 2;
const MARK_SIZE_LEFT = 4;
const MARK_SIZE_RIGHT = 11;

export const Container = styled.div`
  border-radius: ${TODO_BORDER_RADIUS}px;
  border: ${TODO_BORDER_COLOR} ${TODO_BORDER_SIZE}px solid;
  margin-bottom: ${TODO_MARGIN_BOTTOM}px;
  display: flex;
  justify-content: space-between;
  padding: ${TODO_PADDING}px;
  min-height: ${TODO_HEIGHT}px;
`;

export const Text = styled.p`
  font-size: ${FONT_SIZE}px;
  color: ${FONT_COLOR};
  width: 70%;
`;

export const CrossedText = styled(Text)`
  text-decoration: line-through;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: ${BUTTONS_CONTAINER_WIDTH}px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export const DoneButton = styled(Button)`
  position: relative;
  width: ${BUTTON_SIZE}px;
  height: ${BUTTON_SIZE}px;
  border-radius: 50%;
  border: ${BUTTON_COLOR} ${BUTTON_BORDER_SIZE}px solid;
  background-color: transparent;
  color: ${BUTTON_COLOR};
`;

export const DoneButtonWithMark = styled(DoneButton)`
  &:after {
    content: '';
    background-color: transparent;

    position: absolute;
    left: ${MARK_POSITION_LEFT}px;
    bottom: ${MARK_POSITION_BOTTOM}px;

    width: ${MARK_SIZE_LEFT}px;
    border-bottom: ${MARK_WIDTH}px solid ${BUTTON_COLOR};

    height: ${MARK_SIZE_RIGHT}px;
    border-right: ${MARK_WIDTH}px solid ${BUTTON_COLOR};

    transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
`;
