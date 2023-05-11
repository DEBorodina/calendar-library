export class CalendarHelper {
  static getNumberOfDaysInMonth = (year: number, month: number): number => {
    return CalendarHelper.createDateWithFullYear(year, month + 1, 0).getDate();
  };

  static isDatesEqual = (date1: Date, date2: Date): boolean => {
    if (!date1 || !date2) {
      return false;
    }
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

  static isDateLess = (lessDate: Date, biggerDate: Date): boolean => {
    if (!lessDate || !biggerDate) {
      return true;
    }
    lessDate = new Date(
      lessDate.getFullYear(),
      lessDate.getMonth(),
      lessDate.getDate()
    );
    biggerDate = new Date(
      biggerDate.getFullYear(),
      biggerDate.getMonth(),
      biggerDate.getDate()
    );
    return lessDate.getTime() < biggerDate.getTime();
  };

  static createDateWithFullYear = (
    year: number,
    month: number,
    date: number
  ): Date => {
    const day = new Date(year, month);

    day.setFullYear(year);
    day.setDate(date);

    return day;
  };
}
