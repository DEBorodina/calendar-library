import React, { useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultStyles, sizes } from '@/constants/styles';
import { usePopup } from '@/hooks';
import Global from '@/styles/global';
import { DateValidator } from '@/utils/DateValidator';

import { Calendar } from '../Calendar';
import { DateInput } from '../DateInput';
import { ErrorBoundary } from '../ErrorBoundary';
import { Container, ErrorText, Label } from './styles';
import { DatePickerProps } from './types';

export const DatePicker: React.FC<DatePickerProps> = ({
  defaultValue = null,
  onChange,
  mainColor,
  holidayColor,
  errorColor,
  size,
  label,
  minDate,
  maxDate,
  ...props
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

  const handleChange = (date: Date) => {
    setValue(date);
    onChange(date);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <ErrorBoundary>
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
              onChange={handleChange}
              value={value}
              minDate={minDate}
              maxDate={maxDate}
              {...props}
            />
          )}
        </Container>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
