import { render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultStyles } from '@/constants/styles';

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
  it('Should display certain title', () => {
    render(
      <ThemeProvider theme={defaultStyles}>
        <ControlPanel
          handleNext={() => 1}
          handlePrevious={() => 2}
          title={'March 2023'}
        />
      </ThemeProvider>
    );
    expect(screen.getByText('March 2023')).toBeInTheDocument();
  });
});
