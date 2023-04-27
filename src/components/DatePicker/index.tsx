import React, { useLayoutEffect, useState } from 'react';

import { usePopup } from '@/hooks';
import Global from '@/styles/global';
import { CalendarHelper } from '@/utils/CalendarHelper';
import { DateFormatter } from '@/utils/DateFormatter';
import { DateValidator } from '@/utils/DateValidator';

import { DateInput } from '../DateInput';
import { WeekCalendar } from '../WeekCalendar';
import { Container } from './styles';
import { DatePickerProps } from './types';

export const DatePicker: React.FC<DatePickerProps> = ({
  defaultValue,
  onChange,
}) => {
  const [popUp, showPopup, setShowPopup] = usePopup();
  const [value, setValue] = useState(defaultValue);

  useLayoutEffect(() => {
    setCurrentValue(DateFormatter.getInputValueFromDate(value));
  }, [value]);

  const [currentValue, setCurrentValue] = useState(
    DateFormatter.getInputValueFromDate(defaultValue)
  );

  const handleChange = (date: Date) => {
    setValue(date);
    onChange(date);
  };

  const handleChangeInput = (inputValue: string) => {
    setCurrentValue(inputValue.trim());

    if (DateValidator.isInputDateValid(inputValue)) {
      const [date, month, year] = inputValue.split('/').map((s) => Number(s));
      const selectedDate = CalendarHelper.createDateWithFullYear(
        year,
        month - 1,
        date
      );
      setValue(selectedDate);
      handleChange(selectedDate);
    }
  };

  const handleFocus = () => {
    setShowPopup(true);
  };

  const handleToggle = () => {
    setShowPopup(!showPopup);
  };

  const handleBlur = (inputValue: string) => {
    if (!DateValidator.isInputDateValid(inputValue))
      setCurrentValue(DateFormatter.getInputValueFromDate(value));
  };

  return (
    <>
      <Global />
      <Container ref={popUp}>
        <DateInput
          value={currentValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChangeInput}
          onToggle={handleToggle}
        />
        {showPopup && <WeekCalendar value={value} onChange={handleChange} />}
      </Container>
    </>
  );
};

// {showPopup && <MonthCalendar value={value} onChange={handleChange} />}
