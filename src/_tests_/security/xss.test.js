describe('XSS Protection (TC108–TC111)', () => {
  // Simple sanitizer function
  const sanitizeInput = (input) => input.replace(/<[^>]*>?/gm, '');

  test('removes script tags from input', () => {
    const input = '<script>alert("hack")</script>';
    const sanitized = sanitizeInput(input);
    expect(sanitized).toBe('alert("hack")');
  });

  test('removes inline event handlers', () => {
    const input = '<div onclick="alert(1)">Click me</div>';
    const sanitized = sanitizeInput(input);
    expect(sanitized).toBe('Click me');
  });

  test('allows normal text without modification', () => {
    const input = 'Hello World';
    const sanitized = sanitizeInput(input);
    expect(sanitized).toBe('Hello World');
  });

  test('removes mixed HTML and JS tags', () => {
    const input = '<b>Bold</b><img src=x onerror=alert(1)>';
    const sanitized = sanitizeInput(input);
    expect(sanitized).toBe('Bold');
  });
});
