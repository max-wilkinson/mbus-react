import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title text', () => {
  const { getByText } = render(<App />);
  const titleText = getByText(/MBus/i);
  expect(titleText).toBeInTheDocument();
});
