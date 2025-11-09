/**
 * @jest-environment jsdom
 */

describe('Admin Panel', () => {
  beforeEach(() => {
    // Embedded HTML for the Admin page
    document.body.innerHTML = `
      <div class="admin-controls">
        <select id="requestSelect">
          <option value="">Choose a request...</option>
        </select>

        <select id="statusSelect">
          <option value="">Select status...</option>
          <option value="Pending">Pending</option>
          <option value="Scheduled">Scheduled</option>
          <option value="Completed">Completed</option>
          <option value="Missed">Missed</option>
        </select>

        <button id="updateStatusBtn" disabled>Update Status</button>
      </div>

      <table class="table" id="admin-table">
        <tbody id="admin-tbody"></tbody>
      </table>
    `;

    // Simulated JS for Admin behavior
    const requestSelect = document.getElementById('requestSelect');
    const statusSelect = document.getElementById('statusSelect');
    const updateBtn = document.getElementById('updateStatusBtn');
    const adminTbody = document.getElementById('admin-tbody');

    // Load some initial requests into localStorage
    const initialRequests = [
      { id: 'REQ001', fullName: 'John Doe', location: 'Nairobi', wasteType: 'General', preferredDate: '2025-11-10', status: 'Pending' },
      { id: 'REQ002', fullName: 'Jane Smith', location: 'Kisumu', wasteType: 'Recyclable', preferredDate: '2025-11-12', status: 'Scheduled' }
    ];
    localStorage.setItem('pickupRequests', JSON.stringify(initialRequests));

    // Populate table and select
    const requests = JSON.parse(localStorage.getItem('pickupRequests'));
    requests.forEach(req => {
      // Table row
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${req.id}</td>
        <td>${req.fullName}</td>
        <td>${req.location}</td>
        <td>${req.wasteType}</td>
        <td>${req.preferredDate}</td>
        <td class="status-cell">${req.status}</td>
      `;
      adminTbody.appendChild(tr);

      // Dropdown option
      const option = document.createElement('option');
      option.value = req.id;
      option.textContent = `${req.id} - ${req.fullName}`;
      requestSelect.appendChild(option);
    });

    // Enable button only if request and status are selected
    const toggleButton = () => {
      updateBtn.disabled = !(requestSelect.value && statusSelect.value);
    };

    requestSelect.addEventListener('change', toggleButton);
    statusSelect.addEventListener('change', toggleButton);

    // Handle status update
    updateBtn.addEventListener('click', () => {
      const selectedId = requestSelect.value;
      const newStatus = statusSelect.value;

      const storedRequests = JSON.parse(localStorage.getItem('pickupRequests'));
      const updatedRequests = storedRequests.map(r => {
        if (r.id === selectedId) {
          r.status = newStatus;
        }
        return r;
      });
      localStorage.setItem('pickupRequests', JSON.stringify(updatedRequests));

      // Update table cell
      const rows = Array.from(adminTbody.querySelectorAll('tr'));
      rows.forEach(row => {
        if (row.cells[0].textContent === selectedId) {
          row.querySelector('.status-cell').textContent = newStatus;
        }
      });
    });
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('enables update button when request and status selected', () => {
    const requestSelect = document.getElementById('requestSelect');
    const statusSelect = document.getElementById('statusSelect');
    const updateBtn = document.getElementById('updateStatusBtn');

    expect(updateBtn.disabled).toBe(true);

    requestSelect.value = 'REQ001';
    requestSelect.dispatchEvent(new Event('change', { bubbles: true }));
    expect(updateBtn.disabled).toBe(true);

    statusSelect.value = 'Completed';
    statusSelect.dispatchEvent(new Event('change', { bubbles: true }));
    expect(updateBtn.disabled).toBe(false);
  });

  test('updates request status in table and localStorage', () => {
    const requestSelect = document.getElementById('requestSelect');
    const statusSelect = document.getElementById('statusSelect');
    const updateBtn = document.getElementById('updateStatusBtn');

    requestSelect.value = 'REQ001';
    statusSelect.value = 'Completed';
    updateBtn.disabled = false;

    updateBtn.click();

    // Check table
    const statusCell = document.querySelector('#admin-tbody tr:first-child .status-cell');
    expect(statusCell.textContent).toBe('Completed');

    // Check localStorage
    const storedRequests = JSON.parse(localStorage.getItem('pickupRequests'));
    expect(storedRequests.find(r => r.id === 'REQ001').status).toBe('Completed');
  });
});