import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../../components/Login';
import '@testing-library/jest-dom';

const renderWithRouter = (ui) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe('Login Component (Smoke + Validation)', () => {

  test('shows error message on empty submission (TC004)', () => {
    renderWithRouter(<Login />);

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // Match the actual text in the component
    expect(screen.getByText(/please enter email and password/i)).toBeInTheDocument();
  });

  test('prevents submission for empty fields (TC006–TC008)', () => {
    renderWithRouter(<Login />);

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // Component must render these messages
    expect(screen.getByText(/please enter email and password/i)).toBeInTheDocument();
  });

});
