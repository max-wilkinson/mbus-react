import React from 'react';
import { render } from '@testing-library/react';
import App from '../app/App';

test('renders bus stop text', () => {
  const { getByText } = render(<App />);
  const busStopText = getByText(/Pierpont Commons/);
  expect(busStopText).toBeInTheDocument();
});

test('renders bus route text', () => {
  const { getByText } = render(<App />);
  const busRouteText = getByText(/Commuter South/);
  expect(busRouteText).toBeInTheDocument();
});

test('renders next bus text', () => {
  const { getByText } = render(<App />);
  const nextBusText = getByText(/minutes until next bus/);
  expect(nextBusText).toBeInTheDocument();
});
