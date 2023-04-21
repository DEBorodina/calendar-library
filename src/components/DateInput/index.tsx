import React, { useLayoutEffect, useState } from 'react';

import { IconButton } from '@/styles/common';

import { Icon } from '../Icons';
import { IconTypes } from '../Icons/types';
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
    const newInputValue = e.target.value.trim();
    setInputValue(newInputValue);
    onChange(newInputValue);
  };

  const handleBlur = () => {
    onBlur(inputValue);
  };

  return (
    <InputContainer>
      <Input
        type="text"
        onFocus={onFocus}
        onBlur={handleBlur}
        value={inputValue}
        onChange={handleChange}
        placeholder={'Choose Date'}
      />
      <IconButton onClick={onToggle}>
        <Icon icon={IconTypes.calendar} />
      </IconButton>
    </InputContainer>
  );
};
