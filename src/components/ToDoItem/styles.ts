import styled from 'styled-components';

export const Container = styled.div`
  border-radius: ${(props) => props.theme.TODO_BORDER_RADIUS}px;
  border: ${(props) => props.theme.TODO_BORDER_COLOR}
    ${(props) => props.theme.TODO_BORDER_SIZE}px solid;
  margin-bottom: ${(props) => props.theme.TODO_MARGIN_BOTTOM}px;
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.TODO_PADDING}px;
  min-height: ${(props) => props.theme.TODO_HEIGHT}px;
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.TODO_FONT_SIZE}px;
  color: ${(props) => props.theme.FONT_COLOR};
  width: 70%;
`;

export const CrossedText = styled(Text)`
  text-decoration: line-through;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: ${(props) => props.theme.TODO_BUTTONS_CONTAINER_WIDTH}px;
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
  width: ${(props) => props.theme.TODO_BUTTON_SIZE}px;
  height: ${(props) => props.theme.TODO_BUTTON_SIZE}px;
  border-radius: 50%;
  border: ${(props) => props.theme.TODO_BUTTON_COLOR}
    ${(props) => props.theme.TODO_BUTTON_BORDER_SIZE}px solid;
  background-color: transparent;
  color: ${(props) => props.theme.TODO_BUTTON_COLOR};
`;

export const DoneButtonWithMark = styled(DoneButton)`
  &:after {
    content: '';
    background-color: transparent;

    position: absolute;
    left: ${(props) => props.theme.MARK_POSITION_LEFT}px;
    bottom: ${(props) => props.theme.MARK_POSITION_BOTTOM}px;

    width: ${(props) => props.theme.MARK_SIZE_LEFT}px;
    border-bottom: ${(props) => props.theme.MARK_WIDTH}px solid
      ${(props) => props.theme.BUTTON_COLOR};

    height: ${(props) => props.theme.MARK_SIZE_RIGHT}px;
    border-right: ${(props) => props.theme.MARK_WIDTH}px solid
      ${(props) => props.theme.BUTTON_COLOR};

    transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
`;
