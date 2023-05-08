import { render, screen } from '@testing-library/react';
import React from 'react';

import { DateInput } from './index';

describe('App todo form test', () => {
  it('Should have placeholder "add task"', () => {
    render(
      <DateInput
        handleChange={() => ({})}
        handlePopUp={() => ({})}
        value={new Date()}
        setErrors={() => ({})}
      />
    );
    expect(screen.getByText('05/06/2023')).toBeInTheDocument();
  });
});
