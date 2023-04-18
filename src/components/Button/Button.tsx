import React, { FC, HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children }) => (
  <button>{children}</button>
);
