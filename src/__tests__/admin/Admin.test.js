import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Admin from '../../components/Admin';

beforeEach(() => {
  localStorage.setItem("pickupRequests", JSON.stringify([
    { id: "REQ1", date: "2025-01-22", name: "John", location: "Nairobi", status: "Pending" },
    { id: "REQ2", date: "2025-01-23", name: "Mary", location: "Kisumu", status: "Missed" }
  ]));
});

afterEach(() => localStorage.clear());

describe("Admin Component – Real UI Tests", () => {

  test("renders total requests & missed count", () => {
    render(<Admin />);

    expect(screen.getByText(/Total Requests: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Missed Pickups: 1/i)).toBeInTheDocument();
  });

  test("completes a request and updates localStorage", () => {
    render(<Admin />);

    const completeBtn = screen.getAllByText("Complete")[0];
    fireEvent.click(completeBtn);

    const stored = JSON.parse(localStorage.getItem("pickupRequests"));
    expect(stored[0].status).toBe("Completed");
  });

  test("marks a request as missed", () => {
    render(<Admin />);

    const missedBtn = screen.getAllByText("Missed")[0];
    fireEvent.click(missedBtn);

    const stored = JSON.parse(localStorage.getItem("pickupRequests"));
    expect(stored[0].status).toBe("Missed");
  });

  test("deletes a request", () => {
    window.confirm = jest.fn(() => true); // auto-confirm

    render(<Admin />);

    const deleteBtn = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteBtn);

    const stored = JSON.parse(localStorage.getItem("pickupRequests"));
    expect(stored).toHaveLength(1);
  });

  test("renders with empty storage (fallback code path)", () => {
  localStorage.clear();
  render(<Admin />);
  expect(screen.getByText(/Total Requests: 0/i)).toBeInTheDocument();
});


});
