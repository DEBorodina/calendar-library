import React, { useLayoutEffect, useState } from 'react';

import { Icons } from '@/constants/icons/Icons';
import { IconButton } from '@/styles/common';
import { CalendarHelper } from '@/utils/CalendarHelper';
import { DateFormatter } from '@/utils/DateFormatter';
import { DateValidator } from '@/utils/DateValidator';

import { Input, InputContainer } from './style';
import { DateInputProps } from './types';

export const DateInput: React.FC<DateInputProps> = ({
  handleChange,
  handlePopUp,
  value,
  minDate,
  maxDate,
  setErrors,
}) => {
  const [inputValue, setInputValue] = useState(
    value ? DateFormatter.getInputValueFromDate(value) : ''
  );

  useLayoutEffect(() => {
    setInputValue(value ? DateFormatter.getInputValueFromDate(value) : '');
  }, [value]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors('');
    let newValue = e.target.value;
    if (!newValue.match(/^[\d|/]*$/)) return;

    if (newValue.match(new RegExp(inputValue + '\\d'))) {
      if (newValue.length == 2 || newValue.length == 5) {
        newValue += '/';
      }
    }

    setInputValue(newValue);

    if (!newValue) {
      handleChange(null);
      return;
    }

    if (!DateValidator.isInputFormatValid(newValue)) {
      setErrors('Invalid input data');
      return;
    }

    const [date, month, year] = newValue.split('/').map((s) => Number(s));
    const selectedDate = CalendarHelper.createDateWithFullYear(
      year,
      month - 1,
      date
    );

    if (!DateValidator.isInValidRange(selectedDate, minDate, maxDate)) {
      setErrors('Date out of range');
      return;
    }

    handleChange(selectedDate);
  };

  const onFocus = () => {
    handlePopUp(true);
  };

  const onToggle = () => {
    handlePopUp((showPopup) => !showPopup);
  };

  const onBlur = () => {
    if (!DateValidator.isInputDateValid(inputValue, minDate, maxDate)) {
      setErrors('');
      setInputValue(DateFormatter.getInputValueFromDate(value));
    }
  };

  return (
    <InputContainer>
      <Input
        type="text"
        maxLength={10}
        onFocus={onFocus}
        onBlur={onBlur}
        value={inputValue}
        onChange={onChange}
        placeholder={'dd/mm/yyyy'}
      />
      <IconButton onClick={onToggle} aria-label={'toggle'}>
        {Icons.calendar}
      </IconButton>
    </InputContainer>
  );
};
