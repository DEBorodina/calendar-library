export class CalendarHelper {
  static getNumberOfDaysInMonth = (year: number, month: number): number => {
    return CalendarHelper.createDateWithFullYear(year, month + 1, 0).getDate();
  };

  static isDatesEqual = (date1: Date, date2: Date): boolean => {
    if (date1.getDate() !== date2.getDate()) {
      return false;
    }
    if (date1.getMonth() !== date2.getMonth()) {
      return false;
    }
    if (date1.getFullYear() !== date2.getFullYear()) {
      return false;
    }
    return true;
  };

  static createDateWithFullYear = (
    year: number,
    month: number,
    date: number
  ): Date => {
    const day = new Date(year, month, date);
    day.setFullYear(year);
    return day;
  };
}
