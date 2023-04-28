import React, { useLayoutEffect, useState } from 'react';

import { IconButton } from '@/styles/common';

import { Icons } from '../../constants/icons';
import { Input, InputContainer } from './style';
import { DateInputProps } from './types';

export const DateInput: React.FC<DateInputProps> = ({
  onFocus,
  onBlur,
  onChange,
  onToggle,
  value,
}) => {
  const [inputValue, setInputValue] = useState(value);

  useLayoutEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    if (!newValue.match(/^[\d|/]*$/)) return;

    if (newValue.match(new RegExp(inputValue + '\\d'))) {
      if (newValue.length == 2 || newValue.length == 5) {
        newValue += '/';
      }
    }
    setInputValue(newValue);
    onChange(newValue);
  };

  const handleBlur = () => {
    onBlur(inputValue);
  };

  return (
    <InputContainer>
      <Input
        type="text"
        maxLength={10}
        onFocus={onFocus}
        onBlur={handleBlur}
        value={inputValue}
        onChange={handleChange}
        placeholder={'dd/mm/yyyy'}
      />
      <IconButton onClick={onToggle}>{Icons.calendar}</IconButton>
    </InputContainer>
  );
};
