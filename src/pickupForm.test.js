/**
 * @jest-environment jsdom
 */

describe('Pickup Form & localStorage', () => {
  beforeEach(() => {
    // Embedded HTML for the pickup form page
    document.body.innerHTML = `
      <form id="pickup-form">
        <div class="form-group">
          <label for="fullName">Full Name *</label>
          <input type="text" id="fullName" name="fullName" class="form-control" required>
          <div class="error-message" id="name-error"></div>
        </div>

        <div class="form-group">
          <label for="location">Location *</label>
          <select id="location" name="location" class="form-control" required>
            <option value="">Select your city</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Kisumu">Kisumu</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Eldoret">Eldoret</option>
          </select>
          <div class="error-message" id="location-error"></div>
        </div>

        <div class="form-group">
          <label>Waste Type *</label>
          <div class="radio-group">
            <label><input type="radio" name="wasteType" value="General" required> General</label>
            <label><input type="radio" name="wasteType" value="Recyclable" required> Recyclable</label>
            <label><input type="radio" name="wasteType" value="Hazardous" required> Hazardous</label>
          </div>
          <div class="error-message" id="waste-error"></div>
        </div>

        <div class="form-group">
          <label for="preferredDate">Preferred Pickup Date</label>
          <input type="date" id="preferredDate" name="preferredDate" class="form-control">
        </div>

        <button type="submit">Submit Request</button>
      </form>
    `;

    // Simple JS logic for form validation (simulates your script.js)
    const form = document.getElementById('pickup-form');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;

      const fullName = document.getElementById('fullName').value.trim();
      const location = document.getElementById('location').value;
      const wasteType = form.querySelector('input[name="wasteType"]:checked');

      // Clear previous errors
      document.getElementById('name-error').textContent = '';
      document.getElementById('location-error').textContent = '';
      document.getElementById('waste-error').textContent = '';

      if (!fullName) {
        document.getElementById('name-error').textContent = 'Full name is required';
        hasError = true;
      }

      if (!location) {
        document.getElementById('location-error').textContent = 'Please select a location';
        hasError = true;
      }

      if (!wasteType) {
        document.getElementById('waste-error').textContent = 'Please select a waste type';
        hasError = true;
      }

      if (!hasError) {
        // Save to localStorage
        const requests = JSON.parse(localStorage.getItem('pickupRequests') || '[]');
        requests.push({
          fullName,
          location,
          wasteType: wasteType.value,
          preferredDate: document.getElementById('preferredDate').value,
        });
        localStorage.setItem('pickupRequests', JSON.stringify(requests));
      }
    });
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('shows errors when submitting empty form', () => {
    const form = document.getElementById('pickup-form');
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    expect(document.getElementById('name-error').textContent).toBe('Full name is required');
    expect(document.getElementById('location-error').textContent).toBe('Please select a location');
    expect(document.getElementById('waste-error').textContent).toBe('Please select a waste type');
  });

  test('stores valid request in localStorage', () => {
    document.getElementById('fullName').value = 'Melody Tangus';
    document.getElementById('location').value = 'Eldoret';
    document.querySelector('input[name="wasteType"][value="General"]').checked = true;
    document.getElementById('preferredDate').value = '2025-11-10';

    const form = document.getElementById('pickup-form');
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    const storedRequests = JSON.parse(localStorage.getItem('pickupRequests'));
    expect(storedRequests).toHaveLength(1);
    expect(storedRequests[0]).toEqual({
      fullName: 'Melody Tangus',
      location: 'Eldoret',
      wasteType: 'General',
      preferredDate: '2025-11-10',
    });
  });
});