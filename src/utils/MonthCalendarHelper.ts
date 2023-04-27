import { CalendarHelper } from './CalendarHelper';

export class MonthCalendarHelper {
  static getCurrentMonthDays = (year: number, month: number): Date[] => {
    const dateCells: Date[] = [];

    const currentMonthDaysAmount = CalendarHelper.getNumberOfDaysInMonth(
      year,
      month
    );

    for (let i = 1; i <= currentMonthDaysAmount; i++) {
      dateCells.push(CalendarHelper.createDateWithFullYear(year, month, i));
    }

    return dateCells;
  };

  static getPreviousMonthDays = (year: number, month: number): Date[] => {
    const currentMonthFirstDay = CalendarHelper.createDateWithFullYear(
      year,
      month,
      1
    ).getDay();
    const dateCells: Date[] = [];

    for (let i = currentMonthFirstDay - 1; i >= 0; i--) {
      dateCells.push(CalendarHelper.createDateWithFullYear(year, month, -i));
    }
    return dateCells;
  };

  static getNextMonthDays = (year: number, month: number): Date[] => {
    const previousMonthCellsAmount = CalendarHelper.createDateWithFullYear(
      year,
      month,
      1
    ).getDay();
    const currentMonthDaysAmount = CalendarHelper.getNumberOfDaysInMonth(
      year,
      month
    );

    const dateCells: Date[] = [];

    let totalCellsAmount = previousMonthCellsAmount + currentMonthDaysAmount;
    let i = 1;
    while (totalCellsAmount % 7 !== 0) {
      dateCells.push(
        CalendarHelper.createDateWithFullYear(
          year,
          month,
          currentMonthDaysAmount + i
        )
      );
      totalCellsAmount += 1;
      i++;
    }

    return dateCells;
  };

  static getMonthToDisplay = (year: number, month: number): Date[] => {
    const currentMonthDays = MonthCalendarHelper.getCurrentMonthDays(
      year,
      month
    );
    const previousMonthDays = MonthCalendarHelper.getPreviousMonthDays(
      year,
      month
    );
    const nextMonthDays = MonthCalendarHelper.getNextMonthDays(year, month);

    return [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];
  };
}
