import styled from 'styled-components';

const INPUT_BORDER_RADIUS = 8;
const INPUT_BORDER_COLOR = '#dddddd';
const INPUT_BORDER_SIZE = 1;

export const Form = styled.form`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  color: #333333;
  outline: none;
  border-radius: ${INPUT_BORDER_RADIUS}px;
  border: ${INPUT_BORDER_COLOR} ${INPUT_BORDER_SIZE}px solid;
  width: 80%;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 12px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: #aaaaaa 1px solid;
  background-color: transparent;
  color: #aaaaaa;
  font-size: 20px;
  width: 20px;
  height: 20px;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }
`;
