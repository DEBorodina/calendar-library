import { fireEvent, render, screen } from '@testing-library/react';
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
          handleNext={() => ({})}
          handlePrevious={() => ({})}
          title={'March 2023'}
        />
      </ThemeProvider>
    );
    expect(screen.getByText('March 2023')).toBeInTheDocument();
  });
});

describe('App todo form test', () => {
  it('Should display certain title', () => {
    render(
      <ThemeProvider theme={defaultStyles}>
        <ControlPanel
          handleNext={() => ({})}
          handlePrevious={() => ({})}
          title={'March 2023'}
        />
      </ThemeProvider>
    );
    expect(screen.getByText('March 2023')).toBeInTheDocument();
  });

  it('Should call handlePrevious on previous button', () => {
    const mockHandlePrevious = jest.fn();
    const mockHandleNext = jest.fn();
    render(
      <ThemeProvider theme={defaultStyles}>
        <ControlPanel
          handleNext={mockHandleNext}
          handlePrevious={mockHandlePrevious}
          title={'March 2023'}
        />
      </ThemeProvider>
    );
    const previousButton = screen.getByLabelText(/previous/);
    fireEvent.click(previousButton);
    expect(mockHandlePrevious).toBeCalledTimes(1);
  });

  it('Should call handleNext on next button', () => {
    const mockHandlePrevious = jest.fn();
    const mockHandleNext = jest.fn();
    render(
      <ThemeProvider theme={defaultStyles}>
        <ControlPanel
          handleNext={mockHandleNext}
          handlePrevious={mockHandlePrevious}
          title={'March 2023'}
        />
      </ThemeProvider>
    );
    const nextButton = screen.getByLabelText(/next/);
    fireEvent.click(nextButton);
    expect(mockHandleNext).toBeCalledTimes(1);
  });
});
