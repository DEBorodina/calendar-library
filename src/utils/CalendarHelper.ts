export class CalendarHelper {
  static getNumberOfDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
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
}
