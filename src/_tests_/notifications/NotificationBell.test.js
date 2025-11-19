// src/_tests_/notifications/NotificationBell.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // important!
import NotificationBell from '../../components/NotificationBell';

// Mock localStorage
beforeEach(() => {
  localStorage.clear();
});

describe('NotificationBell Component', () => {
  test('renders bell with no notifications', () => {
    render(<NotificationBell />);
    const bellButton = screen.getByRole('button', { name: /0 unread notifications/i });
    expect(bellButton).toBeInTheDocument();

    // open dropdown
    fireEvent.click(bellButton);

    expect(screen.getByText(/No notifications/i)).toBeInTheDocument();
  });

  test('renders notifications from localStorage', () => {
    const mockNotifications = [
      { text: 'Pickup scheduled', time: '10:00 AM', read: false }
    ];
    localStorage.setItem('ccNotifications', JSON.stringify(mockNotifications));

    render(<NotificationBell />);

    // Bell shows unread count
    expect(screen.getByText('1')).toBeInTheDocument();

    // open dropdown
    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText('Pickup scheduled')).toBeInTheDocument();
    expect(screen.getByText('10:00 AM')).toBeInTheDocument();
  });

  test('clears all notifications', () => {
    const mockNotifications = [
      { text: 'Pickup scheduled', time: '10:00 AM', read: false }
    ];
    localStorage.setItem('ccNotifications', JSON.stringify(mockNotifications));

    render(<NotificationBell />);
    const bellButton = screen.getByRole('button');

    // open dropdown
    fireEvent.click(bellButton);

    // click Clear All
    fireEvent.click(screen.getByText(/Clear All/i));

    // dropdown updates
    fireEvent.click(bellButton); // reopen to check empty state
    expect(screen.getByText(/No notifications/i)).toBeInTheDocument();
    expect(screen.queryByText('Pickup scheduled')).not.toBeInTheDocument();

    // Bell badge disappears
    expect(screen.queryByText('1')).not.toBeInTheDocument();
  });
});
