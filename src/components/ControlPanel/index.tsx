import React from 'react';

import { IconButton } from '@/styles/common';

import { Icon } from '../Icons';
import { IconTypes } from '../Icons/types';
import { Container, Title } from './styles';
import { ControlPanelProps } from './types';

export const ControlPanel: React.FC<ControlPanelProps> = ({
  handleNext,
  handlePrevious,
  title,
}) => {
  return (
    <Container>
      <IconButton onClick={handlePrevious}>
        <Icon icon={IconTypes.leftArrow} />
      </IconButton>
      <Title>{title}</Title>
      <IconButton onClick={handleNext}>
        <Icon icon={IconTypes.rightArrow} />
      </IconButton>
    </Container>
  );
};
