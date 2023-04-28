import React from 'react';

import { IconButton } from '@/styles/common';

import { Icons } from '../Icons';
import { Container, Title } from './styles';
import { ControlPanelProps } from './types';

export const ControlPanel: React.FC<ControlPanelProps> = ({
  handleNext,
  handlePrevious,
  title,
}) => {
  return (
    <Container>
      <IconButton onClick={handlePrevious}>{Icons.leftArrow}</IconButton>
      <Title>{title}</Title>
      <IconButton onClick={handleNext}>{Icons.rightArrow}</IconButton>
    </Container>
  );
};
