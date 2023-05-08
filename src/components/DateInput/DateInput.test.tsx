import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { DateInput } from './index';

describe('App todo form test', () => {
  it('Should display passed date as string', () => {
    render(
      <DateInput
        handleChange={() => ({})}
        handlePopUp={() => ({})}
        value={new Date(2023, 5, 5)}
        setErrors={() => ({})}
      />
    );
    const input = screen.getByRole('textbox');
    expect((input as HTMLInputElement).value).toBe('05/06/2023');
  });

  it('Should show popUp on focus', () => {
    const mockHandlePopUp = jest.fn();
    render(
      <DateInput
        handleChange={() => ({})}
        handlePopUp={mockHandlePopUp}
        value={new Date(2023, 5, 5)}
        setErrors={() => ({})}
      />
    );
    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    expect(mockHandlePopUp).toBeCalledTimes(1);
    expect(mockHandlePopUp).toBeCalledWith(true);
  });

  it('Should toggle popUp on click on calendar button', () => {
    const mockHandlePopUp = jest.fn();
    render(
      <DateInput
        handleChange={() => ({})}
        handlePopUp={mockHandlePopUp}
        value={new Date(2023, 5, 5)}
        setErrors={() => ({})}
      />
    );
    const input = screen.getByLabelText('toggle');
    fireEvent.click(input);
    expect(mockHandlePopUp).toBeCalledTimes(1);
  });

  it('Should type "/" or numbers', () => {
    render(
      <DateInput
        handleChange={() => ({})}
        handlePopUp={() => ({})}
        value={null}
        setErrors={() => ({})}
      />
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '1' } });
    expect((input as HTMLInputElement).value).toBe('1');
  });

  it('Shouldn\'t let type symbols other than "/" or numbers', () => {
    render(
      <DateInput
        handleChange={() => ({})}
        handlePopUp={() => ({})}
        value={null}
        setErrors={() => ({})}
      />
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'n' } });
    expect((input as HTMLInputElement).value).toBe('');
  });

  it('Should add "/" after 2 or 5 symbols', () => {
    render(
      <DateInput
        handleChange={() => ({})}
        handlePopUp={() => ({})}
        value={null}
        setErrors={() => ({})}
      />
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '11' } });
    expect((input as HTMLInputElement).value).toBe('11/');
  });

  it("Should display 'dd/mm/yyyy' with no provided date", () => {
    render(
      <DateInput
        handleChange={() => ({})}
        handlePopUp={() => ({})}
        value={null}
        setErrors={() => ({})}
      />
    );
    expect(screen.getByPlaceholderText('dd/mm/yyyy')).toBeInTheDocument();
  });

  it("Should set error 'Invalid input data' if invalid data is entered", () => {
    const mockSetErrors = jest.fn();
    render(
      <DateInput
        handleChange={() => ({})}
        handlePopUp={() => ({})}
        value={null}
        setErrors={mockSetErrors}
      />
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '/' } });
    expect(mockSetErrors).toBeCalledTimes(2);
    expect(mockSetErrors).toBeCalledWith('Invalid input data');
  });

  it("Should set error 'Date out of range' if date is smaller then min date, or bigger than max date", () => {
    const mockSetErrors = jest.fn();
    render(
      <DateInput
        handleChange={() => ({})}
        handlePopUp={() => ({})}
        value={null}
        setErrors={mockSetErrors}
        minDate={new Date(2023, 4, 6)}
        maxDate={new Date(2023, 4, 7)}
      />
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '03/05/2023' } });
    expect(mockSetErrors.mock.calls[0][0]).toBe('');
    expect(mockSetErrors.mock.calls[1][0]).toBe('Date out of range');
  });

  it('Should return previous value on blur if new value was incorrect', () => {
    const mockSetErrors = jest.fn();
    render(
      <DateInput
        handleChange={() => ({})}
        handlePopUp={() => ({})}
        value={null}
        setErrors={mockSetErrors}
      />
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '11' } });
    expect((input as HTMLInputElement).value).toBe('11/');
    fireEvent.focusOut(input);
    expect((input as HTMLInputElement).value).toBe('');
    expect(mockSetErrors.mock.calls[0][0]).toBe('');
  });
});
