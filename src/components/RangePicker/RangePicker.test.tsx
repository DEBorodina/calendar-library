/* eslint-disable simple-import-sort/imports */
import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';

import { RangePicker } from './';

beforeEach(() => {
  console.error = jest.fn();
});

describe('Error Boundary', () => {
  test('Should call onchange function with start and end dates when value changed', () => {
    const onChange = jest.fn();
    render(<RangePicker onChange={onChange} />);
    const input = screen.getAllByRole('textbox')[0];
    fireEvent.change(input, { target: { value: '01/02/2023' } });
    expect(onChange).toBeCalledWith({
      startDate: new Date(2023, 1, 1),
      endDate: null,
    });
  });

  test('Should throw an error if default start date is bigger than default end date', () => {
    const onChange = jest.fn();
    expect(() =>
      render(
        <RangePicker
          onChange={onChange}
          defaultEndDate={new Date(2023, 1, 1)}
          defaultStartDate={new Date(2024, 1, 1)}
        />
      )
    ).toThrowError(
      'Default start date should be less or equal than default end date'
    );
  });

  test('Should throw an error if default end date is not between min and max dates', () => {
    const onChange = jest.fn();
    expect(() =>
      render(
        <RangePicker
          onChange={onChange}
          defaultEndDate={new Date(2022, 1, 1)}
          minDate={new Date(2023, 1, 1)}
          maxDate={new Date(2025, 1, 1)}
        />
      )
    ).toThrowError(
      'Default end date should be bigger than min date and less than max date'
    );
  });

  test('Should throw an error if default start date is not between min and max dates', () => {
    const onChange = jest.fn();
    expect(() =>
      render(
        <RangePicker
          onChange={onChange}
          defaultStartDate={new Date(2022, 1, 1)}
          minDate={new Date(2023, 1, 1)}
          maxDate={new Date(2025, 1, 1)}
        />
      )
    ).toThrowError(
      'Default start date should be bigger than min date and less than max date'
    );
  });

  test('Enter start data bigger than end data should set errors', () => {
    const onChange = jest.fn();
    render(
      <RangePicker onChange={onChange} defaultEndDate={new Date(2023, 1, 10)} />
    );
    const input = screen.getAllByRole('textbox')[0];
    fireEvent.change(input, { target: { value: '20/02/2023' } });
    expect(screen.getByText('Date out of range')).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '' } });
    expect(screen.queryByText('Date out of range')).not.toBeInTheDocument();
  });

  test('Enter end data less than start data should set errors', () => {
    const onChange = jest.fn();
    render(
      <RangePicker
        onChange={onChange}
        defaultStartDate={new Date(2023, 1, 10)}
      />
    );
    const input = screen.getAllByRole('textbox')[1];
    fireEvent.change(input, { target: { value: '20/02/2022' } });
    expect(screen.getByText('Date out of range')).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '' } });
    expect(screen.queryByText('Date out of range')).not.toBeInTheDocument();
  });
});
