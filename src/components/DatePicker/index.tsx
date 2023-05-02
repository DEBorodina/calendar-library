import React, { useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultStyles, sizes } from '@/constants/styles';
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
  mainColor,
  holidayColor,
  errorColor,
  size,
  startDate,
  endDate,
  withToDoList,
}) => {
  const [popUp, showPopup, setShowPopup] = usePopup();
  const [value, setValue] = useState(defaultValue);
  const [errors, setErrors] = useState('');

  if (!DateValidator.isInValidRange(defaultValue, minDate, maxDate)) {
    throw new Error(
      'Default date should be bigger than min date and less than max date'
    );
  }

  const theme = useMemo(() => {
    const theme = {
      mainColor: mainColor ? mainColor : defaultStyles.mainColor,
      holidayColor: holidayColor ? holidayColor : defaultStyles.holidayColor,
      errorColor: errorColor ? errorColor : defaultStyles.errorColor,
      size: size ? sizes[size] : defaultStyles.size,
    };
    return theme;
  }, [mainColor, holidayColor, size, errorColor]);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (date: Date) => {
    setValue(date);
    onChange(date);
  };

  return (
    <ThemeProvider theme={theme}>
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
            startDate={startDate}
            endDate={endDate}
            withToDoList={withToDoList}
          />
        )}
      </Container>
    </ThemeProvider>
  );
};
