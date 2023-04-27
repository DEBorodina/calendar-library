import { CalendarHelper } from './CalendarHelper';
import { MonthCalendarHelper } from './MonthCalendarHelper';

export class WeekCalendarHelper {
  static getCurrentWeek = (currentDate: Date): number => {
    //GET NUmber
    const monthDaysToDisplay = MonthCalendarHelper.getMonthToDisplay(
      currentDate.getFullYear(),
      currentDate.getMonth()
    );

    const currentDateIndex = monthDaysToDisplay.findIndex((date) =>
      CalendarHelper.isDatesEqual(currentDate, date)
    );

    const currentWeek = Math.floor(currentDateIndex / 7);
    return currentWeek;
  };

  static getNumberOfWeeksInMonth = (year: number, month: number): number => {
    const monthDaysToDisplay = MonthCalendarHelper.getMonthToDisplay(
      year,
      month
    );
    const numberOfMonthDaysToDisplay = monthDaysToDisplay.length;

    const numberOfWeeksToDisplay = numberOfMonthDaysToDisplay / 7;
    return numberOfWeeksToDisplay;
  };

  static getWeekToDisplay = (
    year: number,
    month: number,
    week: number
  ): Date[] => {
    const monthToDisplay = MonthCalendarHelper.getMonthToDisplay(year, month);

    const firstWeekDay = week * 7;
    const lastWeekDay = firstWeekDay + 7;

    const weekToDisplay = monthToDisplay.slice(firstWeekDay, lastWeekDay);

    return weekToDisplay;
  };
}
