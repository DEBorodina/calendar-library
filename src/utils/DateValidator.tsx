import { CalendarHelper } from './CalendarHelper';

export class DateValidator {
  static isInputFormatValid = (dateInput: string): boolean => {
    const validInputDateRegex = /^\d{2}\/\d{2}\/\d{1,4}$/;
    if (!validInputDateRegex.test(dateInput)) return false;

    const [day, month, year] = dateInput.split('/').map((s) => Number(s));

    if (!DateValidator.isInputMonthValid(month)) return false;

    if (!DateValidator.isInputDayValid(day, month, year)) return false;

    return true;
  };

  protected static isInputMonthValid = (month: number): boolean => {
    if (month < 1 || month > 12) return false;
    return true;
  };

  protected static isInputDayValid = (
    day: number,
    month: number,
    year: number
  ): boolean => {
    const DaysInMonth = CalendarHelper.getNumberOfDaysInMonth(year, month - 1);
    if (day < 1 || day > DaysInMonth) return false;
    return true;
  };

  static isInputDateValid = (
    dateInput: string,
    minDate: Date,
    maxDate: Date
  ) => {
    if (!DateValidator.isInputFormatValid(dateInput)) return false;

    const [day, month, year] = dateInput.split('/').map((s) => Number(s));
    const date = CalendarHelper.createDateWithFullYear(year, month - 1, day);

    if (!DateValidator.isInValidRange(date, minDate, maxDate)) return false;

    return true;
  };

  static isInValidRange(date: Date, minDate: Date, maxDate: Date) {
    if (date && minDate && CalendarHelper.isDateLess(date, minDate))
      return false;
    if (date && maxDate && CalendarHelper.isDateLess(maxDate, date))
      return false;
    return true;
  }
}
