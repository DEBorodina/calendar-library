import React, { useEffect, useState } from 'react';

import { usePopup } from '@/hooks';
import Global from '@/styles/global';
import { DateValidator } from '@/utils/DateValidator';

import { Calendar } from '../Calendar';
import { DateInput } from '../DateInput';
import { Container, ErrorText, Label } from './styles';
import { DatePickerProps } from './types';

export const DatePicker: React.FC<DatePickerProps> = ({
  defaultValue = null,
  onChange,
  label,
  type,
  weekStart,
  showWeekends,
  holidays,
  minDate,
  maxDate,
}) => {
  const [popUp, showPopup, setShowPopup] = usePopup();
  const [value, setValue] = useState(defaultValue);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    if (!DateValidator.isInValidRange(defaultValue, minDate, maxDate)) {
      throw new Error('Default value should be between min and max date');
    }
  }, [defaultValue, minDate, maxDate]);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (date: Date) => {
    setValue(date);
    onChange(date);
  };

  return (
    <>
      <Global />
      <Container ref={popUp}>
        <Label>{label}</Label>
        <DateInput
          value={value}
          handleChange={handleChange}
          handlePopUp={setShowPopup}
          minDate={minDate}
          maxDate={maxDate}
          setErrors={setErrors}
        />
        <ErrorText>{errors}</ErrorText>
        {showPopup && (
          <Calendar
            type={type}
            onChange={handleChange}
            value={value}
            weekStart={weekStart}
            showWeekends={showWeekends}
            holidays={holidays}
            minDate={minDate}
            maxDate={maxDate}
            setErrors={setErrors}
          />
        )}
      </Container>
    </>
  );
};
