import React, { FC, HTMLAttributes } from 'react';

import { CheckIconComponent } from '../Icons';
import { StyledButton } from './styles';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
  bc?: string;
}

export const Button: FC<ButtonProps> = ({ label, bc }) => {
  return (
    <StyledButton bc={bc}>
      {label}
      <CheckIconComponent />
    </StyledButton>
  );
};
