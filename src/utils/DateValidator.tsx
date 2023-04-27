import { CalendarHelper } from './CalendarHelper';

export class DateValidator {
  static isInputDateValid = (dateInput: string) => {
    const validInputDateRegex = /^\d{2}\/\d{2}\/\d{1,4}$/;
    if (!validInputDateRegex.test(dateInput)) return false;

    const [date, month, year] = dateInput.split('/').map((s) => Number(s));

    const DaysInMonth = CalendarHelper.getNumberOfDaysInMonth(year, month - 1);

    if (month < 1 || month > 12 || date < 1 || date > DaysInMonth) return false;

    return true;
  };
}
