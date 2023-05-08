import React from 'react';

import { Icons } from '@/constants/icons/Icons';
import { IconButton } from '@/styles/common';

import { Container, Title } from './styles';
import { ControlPanelProps } from './types';

export const ControlPanel: React.FC<ControlPanelProps> = ({
  handleNext,
  handlePrevious,
  title,
}) => (
  <Container>
    <IconButton onClick={handlePrevious} aria-label={'previous'}>
      {Icons.leftArrow}
    </IconButton>
    <Title>{title}</Title>
    <IconButton onClick={handleNext} aria-label={'next'}>
      {Icons.rightArrow}
    </IconButton>
  </Container>
);
