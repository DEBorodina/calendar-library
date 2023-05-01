import React, { useState } from 'react';

import { DatePicker } from '../DatePicker';
import { Container } from './styles';
import { RangePickerProps } from './types';

export const RangePicker: React.FC<RangePickerProps> = ({
  defaultStartDate = null,
  defaultEndDate = null,
  onChange,
}) => {
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);

  const handleStartDate = (newStartDate: Date) => {
    /*  if (newStartDate?.getTime() > endDate?.getTime()) {
      setStartDate(startDate);          //TODO min max
    } else {*/
    setStartDate(newStartDate);
    onChange({ endDate, startDate: newStartDate });
    // }
  };

  const handleEndDate = (newEndDate: Date) => {
    setEndDate(newEndDate);
    onChange({ startDate, endDate: newEndDate });
  };
  return (
    <Container>
      <DatePicker
        defaultValue={startDate}
        onChange={handleStartDate}
        label={'From'}
      />
      <DatePicker
        defaultValue={endDate}
        onChange={handleEndDate}
        label={'To'}
      />
    </Container>
  );
};
