import React, { useState } from 'react';

import { CalendarHelper } from '@/utils/CalendarHelper';
import { DateValidator } from '@/utils/DateValidator';

import { DatePicker } from '../DatePicker';
import { ErrorBoundary } from '../ErrorBoundary';
import { Container, Label } from './styles';
import { RangePickerProps } from './types';

export const RangePicker: React.FC<RangePickerProps> = ({
  defaultStartDate = null,
  defaultEndDate = null,
  label,
  minDate,
  maxDate,
  onChange,
  ...settings
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
    <ErrorBoundary>
      {' '}
      <Label>{label}</Label>
      <Container>
        <DatePicker
          defaultValue={startDate}
          onChange={handleStartDate}
          label={'From'}
          minDate={minDate}
          maxDate={endDate ? endDate : maxDate}
          endDate={endDate}
          {...settings}
        />
        <DatePicker
          defaultValue={endDate}
          onChange={handleEndDate}
          label={'To'}
          minDate={startDate ? startDate : minDate}
          maxDate={maxDate}
          startDate={startDate}
          {...settings}
        />
      </Container>
    </ErrorBoundary>
  );
};
