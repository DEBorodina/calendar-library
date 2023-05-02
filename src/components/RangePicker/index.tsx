import React, { useState } from 'react';

import { CalendarHelper } from '@/utils/CalendarHelper';
import { DateValidator } from '@/utils/DateValidator';

import { DatePicker } from '../DatePicker';
import { Container, Label } from './styles';
import { RangePickerProps } from './types';

export const RangePicker: React.FC<RangePickerProps> = ({
  defaultStartDate = null,
  defaultEndDate = null,
  label,
  type,
  weekStart,
  showWeekends,
  holidays,
  minDate,
  maxDate,
  mainColor,
  holidayColor,
  errorColor,
  size,
  onChange,
}) => {
  if (!CalendarHelper.isDateLess(defaultStartDate, defaultEndDate)) {
    throw new Error(
      'Default start date should be less or equal than default end date'
    );
  }

  if (!DateValidator.isInValidRange(defaultStartDate, minDate, maxDate)) {
    throw new Error(
      'Default start date should be bigger than min date and less than max date'
    );
  }

  if (!DateValidator.isInValidRange(defaultEndDate, minDate, maxDate)) {
    throw new Error(
      'Default end date should be bigger than min date and less than max date'
    );
  }

  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);

  const handleStartDate = (newStartDate: Date) => {
    setStartDate(newStartDate);
    onChange({ endDate, startDate: newStartDate });
  };

  const handleEndDate = (newEndDate: Date) => {
    setEndDate(newEndDate);
    onChange({ startDate, endDate: newEndDate });
  };

  return (
    <>
      {' '}
      <Label>{label}</Label>
      <Container>
        <DatePicker
          defaultValue={startDate}
          onChange={handleStartDate}
          label={'From'}
          weekStart={weekStart}
          showWeekends={showWeekends}
          holidays={holidays}
          minDate={minDate}
          maxDate={endDate ? endDate : maxDate}
          mainColor={mainColor}
          holidayColor={holidayColor}
          errorColor={errorColor}
          endDate={endDate}
          size={size}
          type={type}
        />
        <DatePicker
          defaultValue={endDate}
          onChange={handleEndDate}
          label={'To'}
          weekStart={weekStart}
          showWeekends={showWeekends}
          holidays={holidays}
          minDate={startDate ? startDate : minDate}
          maxDate={maxDate}
          mainColor={mainColor}
          holidayColor={holidayColor}
          errorColor={errorColor}
          startDate={startDate}
          size={size}
          type={type}
        />
      </Container>
    </>
  );
};
