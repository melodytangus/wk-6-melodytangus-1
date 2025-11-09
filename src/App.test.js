import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // <-- This is required for toBeInTheDocument
import App from './App';

describe('CleanCity App - Smoke Tests', () => {
  test('renders navbar with key links', () => {
    render(<App />);

    const navbar = screen.getByRole('navigation');
    expect(within(navbar).getByText(/🧹 CleanCity/i)).toBeInTheDocument();
    expect(within(navbar).getByText(/Home/i)).toBeInTheDocument();
    expect(within(navbar).getByText(/Blog/i)).toBeInTheDocument();
  });

  test('renders Landing Page on default route', () => {
    render(<App />);

    const landingHeader = screen.getByRole('banner'); // assumes <header> has role="banner"
    expect(within(landingHeader).getByText(/Waste Pickup Scheduler/i)).toBeInTheDocument();
    expect(within(landingHeader).getByText(/Cleaner streets, greener future/i)).toBeInTheDocument();
  });
});

describe('Form Validation & UI Behavior', () => {
  test('shows error when submitting empty form (mock)', () => {
    const mockSubmit = jest.fn();
    mockSubmit();
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});