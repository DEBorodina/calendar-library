import styled from 'styled-components';

const INPUT_BORDER_RADIUS = 8;
const INPUT_BORDER_COLOR = '#dddddd';
const INPUT_BORDER_SIZE = 1;

export const Container = styled.div`
  border-radius: ${INPUT_BORDER_RADIUS}px;
  border: ${INPUT_BORDER_COLOR} ${INPUT_BORDER_SIZE}px solid;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  min-height: 30px;
`;

export const Text = styled.p`
  font-size: 12px;
  color: #333333;
  overflow: auto-scroll;
  margin-bottom: 5px;
  width: 70%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 35px;
  height: 20px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export const DoneButton = styled(Button)`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: #aaaaaa 1px solid;
  background-color: transparent;
  color: #aaaaaa;
  position: relative;
`;

export const DoneButtonWithMark = styled(DoneButton)`
  &:after {
    content: '';
    background-color: transparent;

    position: absolute;
    left: 5px;
    bottom: 3px;

    width: 4px;
    border-bottom: 2px solid #aaaaaa;

    height: 11px;
    border-right: 2px solid #aaaaaa;

    transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
`;
