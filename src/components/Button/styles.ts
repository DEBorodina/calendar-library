import styled from 'styled-components';

interface StyledButtonProps {
  bc?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => props.bc};
`;
