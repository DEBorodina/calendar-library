import { CalendarHelper } from './CalendarHelper';

export class MonthCalendarHelper {
  static getCurrentMonthDays = (year: number, month: number): Date[] => {
    const dateCells: Date[] = [];

    const currentMonthDaysAmount = CalendarHelper.getNumberOfDaysInMonth(
      year,
      month
    );
    const days = Array(currentMonthDaysAmount)
      .fill(0)
      .map((e, i) => i + 1);

    days.forEach((day) => {
      dateCells.push(CalendarHelper.createDateWithFullYear(year, month, day));
    });

    return dateCells;
  };

  static getPreviousMonthDays = (
    year: number,
    month: number,
    weekStart: number
  ): Date[] => {
    let currentMonthFirstDay = CalendarHelper.createDateWithFullYear(
      year,
      month,
      1
    ).getDay();
    if (currentMonthFirstDay != 0) {
      currentMonthFirstDay -= weekStart;
    } else {
      currentMonthFirstDay = weekStart ? 6 : currentMonthFirstDay;
    }

    const dateCells: Date[] = [];

    const days = Array(currentMonthFirstDay)
      .fill(0)
      .map((e, i) => currentMonthFirstDay - 1 - i);

    days.forEach((day) => {
      dateCells.push(CalendarHelper.createDateWithFullYear(year, month, -day));
    });

    return dateCells;
  };

  static getNextMonthDays = (
    year: number,
    month: number,
    weekStart: number
  ): Date[] => {
    const previousMonthCellsAmount = MonthCalendarHelper.getPreviousMonthDays(
      year,
      month,
      weekStart
    ).length;
    const currentMonthDaysAmount = CalendarHelper.getNumberOfDaysInMonth(
      year,
      month
    );

    const dateCells: Date[] = [];

    const totalCellsAmount = previousMonthCellsAmount + currentMonthDaysAmount;

    const amountOfDaysInLastWeek = totalCellsAmount % 7;

    if (amountOfDaysInLastWeek === 0) {
      return dateCells;
    }
    const amountOfDaysToAdd = 7 - amountOfDaysInLastWeek;

    const days = Array(amountOfDaysToAdd)
      .fill(0)
      .map((e, i) => i + 1);

    days.forEach((day) => {
      dateCells.push(
        CalendarHelper.createDateWithFullYear(
          year,
          month,
          currentMonthDaysAmount + day
        )
      );
    });

    return dateCells;
  };

  static getMonthToDisplay = (
    year: number,
    month: number,
    weekStart: number
  ): Date[] => {
    const currentMonthDays = MonthCalendarHelper.getCurrentMonthDays(
      year,
      month
    );
    const previousMonthDays = MonthCalendarHelper.getPreviousMonthDays(
      year,
      month,
      weekStart
    );
    const nextMonthDays = MonthCalendarHelper.getNextMonthDays(
      year,
      month,
      weekStart
    );

    return [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];
  };
}
