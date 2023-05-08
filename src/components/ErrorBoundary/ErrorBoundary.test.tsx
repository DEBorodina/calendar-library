import { render, screen } from '@testing-library/react';
import React from 'react';

import { ErrorBoundary } from './';

beforeEach(() => {
  console.error = jest.fn();
});

describe('Error Boundary', () => {
  test('Should catch an error Boundary', () => {
    const ThrowError = () => {
      throw new Error('Test');
    };
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    expect(screen.getByLabelText('errorboundary')).toBeVisible();
    expect(console.error).toBeCalled();
  });
});
