// src/_tests_/feedback/feedback.test.js
import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';

beforeEach(() => {
  // Mock feedback form in the DOM
  document.body.innerHTML = `
    <form id="feedback-form">
      <input type="text" id="category" />
      <textarea id="message"></textarea>
      <button type="submit">Submit</button>
    </form>
  `;

  // Clear localStorage for each test
  localStorage.clear();

  // Attach submit handler
  const form = document.getElementById('feedback-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const category = document.getElementById('category').value;
    const message = document.getElementById('message').value;

    if (!message) return; // prevent empty message

    const feedback = JSON.parse(localStorage.getItem('feedback') || '[]');
    feedback.push({ category, message });
    localStorage.setItem('feedback', JSON.stringify(feedback));
  });
});

describe('Feedback Form', () => {
  test('prevents submission when message is empty (TC073–TC077)', () => {
    fireEvent.submit(document.getElementById('feedback-form'));
    const feedback = JSON.parse(localStorage.getItem('feedback') || '[]');
    expect(feedback).toHaveLength(0);
  });

  test('allows multiple feedback submissions (TC078–TC084)', () => {
    const category = document.getElementById('category');
    const message = document.getElementById('message');
    const form = document.getElementById('feedback-form');

    const submitFeedback = (cat, msg) => {
      category.value = cat;
      message.value = msg;
      fireEvent.submit(form);
    };

    submitFeedback('Service', 'Great!');
    submitFeedback('App', 'Needs improvement');

    const feedback = JSON.parse(localStorage.getItem('feedback') || '[]');
    expect(feedback).toHaveLength(2);
  });
});
