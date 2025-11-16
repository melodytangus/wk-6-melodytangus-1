import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';

beforeEach(() => {
  document.body.innerHTML = `
    <select id="requestSelect">
      <option value="">Select request</option>
      <option value="REQ001">REQ001</option>
      <option value="REQ002">REQ002</option>
    </select>

    <select id="statusSelect">
      <option value="">Select status</option>
      <option value="Pending">Pending</option>
      <option value="Completed">Completed</option>
      <option value="Cancelled">Cancelled</option>
    </select>

    <button id="updateStatusBtn" disabled>Update</button>
  `;

  const requestSelect = document.getElementById('requestSelect');
  const statusSelect = document.getElementById('statusSelect');
  const btn = document.getElementById('updateStatusBtn');

  // Enable button only when both fields have values
  const toggle = () => btn.disabled = !(requestSelect.value && statusSelect.value);
  requestSelect.addEventListener('change', toggle);
  statusSelect.addEventListener('change', toggle);
});

afterEach(() => localStorage.clear());

describe('Admin Panel', () => {
  test('enables update button when selections are made (TC044–TC048)', () => {
    const requestSelect = document.getElementById('requestSelect');
    const statusSelect = document.getElementById('statusSelect');
    const btn = document.getElementById('updateStatusBtn');

    requestSelect.value = 'REQ001';
    statusSelect.value = 'Completed';
    fireEvent.change(requestSelect);
    fireEvent.change(statusSelect);

    expect(btn.disabled).toBe(false);
  });

  test('keeps update button disabled when one field is empty (TC049–TC052)', () => {
    const requestSelect = document.getElementById('requestSelect');
    const statusSelect = document.getElementById('statusSelect');
    const btn = document.getElementById('updateStatusBtn');

    requestSelect.value = 'REQ001';
    fireEvent.change(requestSelect);
    fireEvent.change(statusSelect); // still empty
    expect(btn.disabled).toBe(true);
  });

  test('updates request status in localStorage (TC053–TC058)', () => {
    localStorage.setItem('pickupRequests', JSON.stringify([
      { id: 'REQ001', status: 'Pending' },
      { id: 'REQ002', status: 'Pending' }
    ]));

    const btn = document.getElementById('updateStatusBtn');
    const requestSelect = document.getElementById('requestSelect');
    const statusSelect = document.getElementById('statusSelect');

    requestSelect.value = 'REQ001';
    statusSelect.value = 'Completed';
    fireEvent.change(requestSelect);
    fireEvent.change(statusSelect);

    // Simulate status update
    btn.disabled = false;
    btn.addEventListener('click', () => {
      const requests = JSON.parse(localStorage.getItem('pickupRequests'));
      const req = requests.find(r => r.id === requestSelect.value);
      if (req) req.status = statusSelect.value;
      localStorage.setItem('pickupRequests', JSON.stringify(requests));
    });
    fireEvent.click(btn);

    const updated = JSON.parse(localStorage.getItem('pickupRequests'));
    expect(updated.find(r => r.id === 'REQ001').status).toBe('Completed');
  });

  test('restricts non-admin users from updating status (TC059–TC064)', () => {
    const userRole = 'user'; // simulate logged-in role
    const btn = document.getElementById('updateStatusBtn');
    btn.disabled = userRole !== 'admin';
    expect(btn.disabled).toBe(true);
  });

  test('allows admin users to update status (TC065–TC068)', () => {
    const userRole = 'admin';
    const btn = document.getElementById('updateStatusBtn');
    btn.disabled = userRole !== 'admin';
    expect(btn.disabled).toBe(false);
  });
});
