import React from 'react';

import { Calendar } from '../CalendarService';

export abstract class CalendarDecorator<S, P> {
  protected calendarToWrap: Calendar<S, P>;

  constructor(calendarToWrap: Calendar<S, P>) {
    this.calendarToWrap = calendarToWrap;
    this.weekStart = this.calendarToWrap.weekStart;
    this.showWeekends = this.calendarToWrap.showWeekends;
    this.holidays = this.calendarToWrap.holidays;
  }

  public weekStart: 0 | 1;
  public showWeekends: boolean;
  public holidays: Date[];

  public handlePrevious(state: S): S {
    return this.calendarToWrap.handlePrevious(state);
  }

  public handleNext(state: S): S {
    return this.calendarToWrap.handleNext(state);
  }

  public getState(value?: Date): S {
    return this.calendarToWrap.getState(value);
  }

  public getGrid(): React.FC<P> {
    return this.calendarToWrap.getGrid();
  }
}
