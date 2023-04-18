import React, { FC, HTMLAttributes } from 'react';

import { t } from '@/components/Calc';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: FC<ButtonProps> = () => <button>{t}</button>;
