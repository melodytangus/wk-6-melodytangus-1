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
test("rejects duplicate email", () => {
  localStorage.setItem("users", JSON.stringify([{ email: "a@test.com", password: "123" }]));
  render(<Register />);

  fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "a@test.com" }});
  fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "12345" }});
  fireEvent.click(screen.getByText("Register"));

  expect(screen.getByText(/email already exists/i)).toBeInTheDocument();
});
});
