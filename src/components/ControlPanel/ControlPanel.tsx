import { render, screen } from '@testing-library/react';
import React from 'react';

import { ControlPanel } from './index';

jest.mock('@/constants/icons/Icons', () => {
  return {
    Icons: {
      leftArrow: 'left arrow',
      rightArrow: 'left arrow',
      calendar: 'left arrow',
      cross: 'left arrow',
    },
  };
});

describe('App todo form test', () => {
  it('Should have placeholder "add task"', () => {
    render(
      <ControlPanel
        handleNext={() => 1}
        handlePrevious={() => 2}
        title={'05/06/2023'}
      />
    );
    expect(screen.getByText('05/06/2023')).toBeInTheDocument();
  });
});
