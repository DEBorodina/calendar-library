import React from 'react';

import { ReactComponent as Calendar } from '@/assets/icons/calendar.svg';
import { ReactComponent as Cross } from '@/assets/icons/cross.svg';
import { ReactComponent as LeftArrow } from '@/assets/icons/left-arrow.svg';
import { ReactComponent as RightArrow } from '@/assets/icons/right-arrow.svg';

import { IconProps, IconTypes } from './types';

export const Icon: React.FC<IconProps> = ({ icon }) => {
  switch (icon) {
    case IconTypes.leftArrow:
      return <LeftArrow />;
    case IconTypes.rightArrow:
      return <RightArrow />;
    case IconTypes.calendar:
      return <Calendar />;
    case IconTypes.cross:
      return <Cross />;
  }
};
