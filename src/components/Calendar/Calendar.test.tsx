import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { months } from '@/constants/months';
import { defaultStyles } from '@/constants/styles';

import { Calendar } from './index';

describe('Day calendar grid test', () => {
  it('Should display month calendar grid as default', () => {
    render(
      <ThemeProvider theme={defaultStyles}>
        <Calendar onChange={() => ({})} value={new Date(2023, 4, 1)} />
      </ThemeProvider>
    );
    const expectedDays = new Array(31).fill(0).map((_, i) => {
      return (i + 1).toString();
    });
    expectedDays.unshift('30');
    expectedDays.push('1', '2', '3');

    const days = screen.getAllByLabelText(/cell/);
    expect(days).toHaveLength(31 + 4);
    days.forEach((day, i) => {
      expect(day).toHaveTextContent(expectedDays[i]);
    });
  });

  it('Should switch to previous month', () => {
    render(
      <ThemeProvider theme={defaultStyles}>
        <Calendar onChange={() => ({})} value={new Date(2023, 4, 1)} />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByLabelText(/previous/));

    let expectedDays = new Array(30).fill(0).map((_, i) => {
      return (i + 1).toString();
    });
    const expectedPreviousDays = new Array(6).fill(0).map((_, i) => {
      return (31 - (5 - i)).toString();
    });
    const expectedNextDays = new Array(6).fill(0).map((_, i) => {
      return (i + 1).toString();
    });

    expectedDays = [
      ...expectedPreviousDays,
      ...expectedDays,
      ...expectedNextDays,
    ];

    const days = screen.getAllByLabelText(/cell/);
    expect(days).toHaveLength(30 + 6 + 6);
    days.forEach((day, i) => {
      expect(day).toHaveTextContent(expectedDays[i]);
    });
  });

  it('Should switch to next month', () => {
    render(
      <ThemeProvider theme={defaultStyles}>
        <Calendar onChange={() => ({})} value={new Date(2023, 4, 1)} />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByLabelText(/next/));

    let expectedDays = new Array(30).fill(0).map((_, i) => {
      return (i + 1).toString();
    });
    const expectedPreviousDays = new Array(4).fill(0).map((_, i) => {
      return (31 - (3 - i)).toString();
    });
    const expectedNextDays = new Array(1).fill(0).map((_, i) => {
      return (i + 1).toString();
    });

    expectedDays = [
      ...expectedPreviousDays,
      ...expectedDays,
      ...expectedNextDays,
    ];

    const days = screen.getAllByLabelText(/cell/);
    expect(days).toHaveLength(30 + 1 + 4);
    days.forEach((day, i) => {
      expect(day).toHaveTextContent(expectedDays[i]);
    });
  });

  it('Should display week calendar grid', () => {
    render(
      <ThemeProvider theme={defaultStyles}>
        <Calendar
          onChange={() => ({})}
          value={new Date(2023, 4, 1)}
          type="week"
        />
      </ThemeProvider>
    );
    const expectedDays = new Array(6).fill(0).map((_, i) => {
      return (i + 1).toString();
    });
    expectedDays.unshift('30');

    const days = screen.getAllByLabelText(/cell/);
    expect(days).toHaveLength(7);
    days.forEach((day, i) => {
      expect(day).toHaveTextContent(expectedDays[i]);
    });
  });

  it('Should switch to previous week', () => {
    render(
      <ThemeProvider theme={defaultStyles}>
        <Calendar
          onChange={() => ({})}
          value={new Date(2023, 4, 1)}
          type="week"
        />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByLabelText(/previous/));
    const expectedDays = new Array(7).fill(0).map((_, i) => {
      return (i + 23).toString();
    });

    const days = screen.getAllByLabelText(/cell/);
    expect(days).toHaveLength(7);
    days.forEach((day, i) => {
      expect(day).toHaveTextContent(expectedDays[i]);
    });
  });

  it('Should switch to next week', () => {
    render(
      <ThemeProvider theme={defaultStyles}>
        <Calendar
          onChange={() => ({})}
          value={new Date(2023, 4, 1)}
          type="week"
        />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByLabelText(/next/));
    const expectedDays = new Array(7).fill(0).map((_, i) => {
      return (i + 7).toString();
    });

    const days = screen.getAllByLabelText(/cell/);
    expect(days).toHaveLength(7);
    days.forEach((day, i) => {
      expect(day).toHaveTextContent(expectedDays[i]);
    });
  });

  it('Should display day calendar grid', () => {
    render(
      <ThemeProvider theme={defaultStyles}>
        <Calendar
          onChange={() => ({})}
          value={new Date(2023, 4, 1)}
          type="day"
        />
      </ThemeProvider>
    );
    const days = screen.getAllByLabelText(/cell/);
    expect(days).toHaveLength(1);
    expect(days[0]).toHaveTextContent(/1/);
  });

  it('Should switch to previous day', () => {
    render(
      <ThemeProvider theme={defaultStyles}>
        <Calendar
          onChange={() => ({})}
          value={new Date(2023, 4, 1)}
          type="day"
        />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByLabelText(/previous/));
    const days = screen.getAllByLabelText(/cell/);
    expect(days).toHaveLength(1);
    expect(days[0]).toHaveTextContent(/30/);
  });

  it('Should switch to next day', () => {
    render(
      <ThemeProvider theme={defaultStyles}>
        <Calendar
          onChange={() => ({})}
          value={new Date(2023, 4, 1)}
          type="day"
        />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByLabelText(/next/));
    const days = screen.getAllByLabelText(/cell/);
    expect(days).toHaveLength(1);
    expect(days[0]).toHaveTextContent(/2/);
  });

  it('Should display current date if no date provided', () => {
    render(
      <ThemeProvider theme={defaultStyles}>
        <Calendar onChange={() => ({})} value={null} />
      </ThemeProvider>
    );

    const currentValue = new Date();
    const currentMonth = months[currentValue.getMonth()];
    const currentYear = currentValue.getFullYear().toString();
    expect(
      screen.getByText(currentMonth + ' ' + currentYear)
    ).toBeInTheDocument();
    expect(screen.getByText(currentValue.getDate())).toBeInTheDocument();
  });
});
