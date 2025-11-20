import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Feedback from '../../components/Feedback';

describe('Feedback Component', () => {
  test('shows error when fields are empty (TC073–TC077)', () => {
    render(<Feedback />);

    const submitBtn = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitBtn);

    expect(screen.getByRole('alert')).toHaveTextContent('Please fill in all fields.');
  });

  test('submits successfully when all fields are filled (TC078–TC084)', () => {
    render(<Feedback />);

    const idInput = screen.getByLabelText(/Request ID/i);
    const feedbackInput = screen.getByLabelText(/Feedback/i);
    const submitBtn = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(idInput, { target: { value: 'REQ-123' } });
    fireEvent.change(feedbackInput, { target: { value: 'Pickup was delayed' } });
    fireEvent.click(submitBtn);

    expect(screen.getByRole('status')).toHaveTextContent('Thank you for your feedback!');
  });
  test("shows error when feedback is empty", () => {
  render(<Feedback />);
  fireEvent.click(screen.getByText("Submit"));
  expect(screen.getByText(/please enter feedback/i)).toBeInTheDocument();
});

});
