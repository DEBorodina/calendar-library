import { CellSettingsProps } from '@/components/MonthCalendarDay/types';
import { ToDo } from '@/components/ToDoList/types';

import { CalendarHelper } from './CalendarHelper';
import { DateValidator } from './DateValidator';
import { getFromLocalStorage } from './localStorage';

export class DateCellService {
  public constructor(
    protected date: Date,
    protected selectedDate: Date,
    protected panelMonth: number,
    protected showWeekends: boolean,
    protected holidays: Date[],
    protected minDate: Date,
    protected maxDate: Date,
    protected endDate: Date,
    protected startDate: Date
  ) {}

  protected isCurrent(): boolean {
    const currentDate = new Date(Date.now());
    const isCurrent = CalendarHelper.isDatesEqual(this.date, currentDate);
    return isCurrent;
  }

  protected isSelected(): boolean {
    const isSelected = CalendarHelper.isDatesEqual(
      this.date,
      this.selectedDate
    );
    return isSelected;
  }

  protected isSelectedMonth(): boolean {
    const isSelectedMonth = this.date.getMonth() === this.panelMonth;
    return isSelectedMonth;
  }

  protected isInValidRange(): boolean {
    const isInValidRange = DateValidator.isInValidRange(
      this.date,
      this.minDate,
      this.maxDate
    );
    return isInValidRange;
  }

  protected isWeekend(): boolean {
    let isWeekend = false;
    if (this.showWeekends) {
      isWeekend = this.date.getDay() === 0 || this.date.getDay() === 6;
    }
    return isWeekend;
  }

  protected isHoliday(): boolean {
    let isHoliday = false;
    if (this.holidays) {
      const holiday = this.holidays.find((holiday) =>
        CalendarHelper.isDatesEqual(holiday, this.date)
      );
      isHoliday = holiday ? true : false;
    }
    return isHoliday;
  }

  protected isEndValue(): boolean {
    let isEndValue = false;

    const isSelected = this.isSelected();

    if (this.endDate && CalendarHelper.isDatesEqual(this.endDate, this.date)) {
      isEndValue = true;
    }
    if (isSelected && this.startDate) {
      isEndValue = true;
    }
    return isEndValue;
  }

  protected isStartValue(): boolean {
    let isStartValue = false;

    const isSelected = this.isSelected();
    if (
      this.startDate &&
      CalendarHelper.isDatesEqual(this.startDate, this.date)
    ) {
      isStartValue = true;
    }
    if (isSelected && this.endDate) {
      isStartValue = true;
    }
    return isStartValue;
  }

  protected isInRange(): boolean {
    let isInRange = false;

    const isSelected = this.isSelected();
    const isEndValue = this.isEndValue();
    const isStartValue = this.isStartValue();

    if (!isSelected && !isStartValue && !isEndValue && this.selectedDate) {
      if (
        this.startDate &&
        DateValidator.isInValidRange(
          this.date,
          this.startDate,
          this.selectedDate
        )
      ) {
        isInRange = true;
      }

      if (
        this.endDate &&
        DateValidator.isInValidRange(this.date, this.selectedDate, this.endDate)
      ) {
        isInRange = true;
      }
    }
    return isInRange;
  }

  protected hasTodos(): boolean {
    let hasTodos = false;
    const todos = getFromLocalStorage(`todos${this.date.getTime()}`) as ToDo[];
    if (todos && todos.length > 0) {
      hasTodos = true;
    }
    return hasTodos;
  }

  public getSettings(): CellSettingsProps {
    const isCurrent = this.isCurrent();
    const isSelected = this.isSelected();
    const isSelectedMonth = this.isSelectedMonth();
    const isInValidRange = this.isInValidRange();
    const isWeekend = this.isWeekend();
    const isHoliday = this.isHoliday();
    const isEndValue = this.isEndValue();
    const isStartValue = this.isStartValue();
    const isInRange = this.isInRange();
    const hasTodos = this.hasTodos();

    return {
      isCurrent,
      isSelected,
      isSelectedMonth,
      isInValidRange,
      isWeekend,
      isHoliday,
      isEndValue,
      isStartValue,
      isInRange,
      hasTodos,
    };
  }
}
