/* eslint-disable simple-import-sort/imports */
import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';

import { defaultStyles } from '@/constants/styles';

import { DatePicker } from './';

beforeEach(() => {
  console.error = jest.fn();
});

describe('Error Boundary', () => {
  test('Should have closed calendar by default', () => {
    const onChange = jest.fn();
    render(<DatePicker onChange={onChange} />);
    expect(screen.queryByLabelText(/calendar/)).not.toBeInTheDocument();
  });

  test('Should open calendar on focus on input', () => {
    const onChange = jest.fn();
    render(<DatePicker onChange={onChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    expect(screen.getByLabelText(/calendar/)).toBeInTheDocument();
  });

  test('Should close calendar on blur on input', () => {
    const onChange = jest.fn();
    render(<DatePicker onChange={onChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.mouseDown(document);
    expect(screen.queryByLabelText(/calendar/)).not.toBeInTheDocument();
  });

  test('Should close calendar on click on toggle button', () => {
    const onChange = jest.fn();
    render(<DatePicker onChange={onChange} />);
    const toggle = screen.getByLabelText(/toggle/);
    fireEvent.click(toggle);
    expect(screen.queryByLabelText(/calendar/)).toBeInTheDocument();
    fireEvent.click(toggle);
    expect(screen.queryByLabelText(/calendar/)).not.toBeInTheDocument();
  });

  test('Correct data typed on input should be displayed on calendar', () => {
    const onChange = jest.fn();
    render(<DatePicker onChange={onChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '01/02/2023' } });
    expect(screen.getByText(/February 2023/)).toBeInTheDocument();
    const selectedDate = screen.getAllByText(/1/)[1];
    expect(selectedDate).toHaveStyleRule(
      'background-color',
      defaultStyles.mainColor
    );
  });

  test('After correct data typed on input onchange function should be called', () => {
    const onChange = jest.fn();
    render(<DatePicker onChange={onChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '01/02/2023' } });
    expect(onChange).toBeCalledWith(new Date(2023, 1, 1));
  });

  test('After date was selected on calendar onchange function should be called', () => {
    const onChange = jest.fn();
    render(
      <DatePicker onChange={onChange} defaultValue={new Date(2023, 4, 1)} />
    );
    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.click(screen.getByText(/^8$/));
    expect(onChange).toBeCalledWith(new Date(2023, 4, 8));
  });

  test('Date selected on calendar should be displayed on input', () => {
    const onChange = jest.fn();
    render(
      <DatePicker onChange={onChange} defaultValue={new Date(2023, 4, 1)} />
    );
    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.click(screen.getByText(/^8$/));
    expect((input as HTMLInputElement).value).toBe('08/05/2023');
  });

  test('Enter incorrect data should set errors', () => {
    const onChange = jest.fn();
    render(<DatePicker onChange={onChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '//' } });
    expect(screen.getByText('Invalid input data')).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '' } });
    expect(screen.queryByText('Invalid input data')).not.toBeInTheDocument();
  });

  test('Enter data less than min value or bigger than max value should set errors', () => {
    const onChange = jest.fn();
    render(
      <DatePicker
        onChange={onChange}
        minDate={new Date(2023, 1, 1)}
        maxDate={new Date(2023, 1, 10)}
      />
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '20/01/2023' } });
    expect(screen.getByText('Date out of range')).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '' } });
    expect(screen.queryByText('Date out of range')).not.toBeInTheDocument();
  });

  test('If default value is less than min value or bigger than max value should throw an error', () => {
    const onChange = jest.fn();
    expect(() =>
      render(
        <DatePicker
          onChange={onChange}
          minDate={new Date(2023, 1, 1)}
          maxDate={new Date(2023, 1, 10)}
          defaultValue={new Date(2024, 1, 1)}
        />
      )
    ).toThrowError(
      'Default date should be bigger than min date and less than max date'
    );
  });
});
