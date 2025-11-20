import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from '../../App';

describe('CleanCity App - Integration & Routing Tests', () => {
  
  test('renders navbar with key links', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();

    expect(screen.getByText(/🧹 CleanCity/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Blog/i)).toBeInTheDocument();
    expect(screen.getByText(/Feedback/i)).toBeInTheDocument();
  });

  test('renders Landing Page on route "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Expect Landing Page content
    expect(screen.getByText(/Waste Pickup Scheduler/i)).toBeInTheDocument();
    expect(screen.getByText(/Cleaner streets, greener future/i)).toBeInTheDocument();
  });

  test('navigates to Blog page', () => {
    render(
      <MemoryRouter initialEntries={['/blog']}>
        <App />
      </MemoryRouter>
    );

    // BlogHome loads
    expect(screen.getByText(/Latest Articles/i)).toBeInTheDocument();
  });

  test('routes unauthenticated user to Login when accessing /dashboard', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <App />
      </MemoryRouter>
    );

    // Dashboard requires login
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  test('redirects to Login for /feedback when user is not logged in', () => {
    render(
      <MemoryRouter initialEntries={['/feedback']}>
        <App />
      </MemoryRouter>
    );

    // Feedback also requires login
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});
