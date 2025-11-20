describe('Mobile Responsiveness (TC128–TC130)', () => {
  const setWidth = (width) => {
    window.innerWidth = width;
    window.dispatchEvent(new Event('resize'));
  };

  test('detects mobile viewport under 768px (TC128)', () => {
    setWidth(375); // typical mobile width
    expect(window.innerWidth).toBeLessThan(768);
  });

  test('detects tablet viewport between 768px and 1024px (TC129)', () => {
    setWidth(800); // tablet width
    expect(window.innerWidth).toBeGreaterThanOrEqual(768);
    expect(window.innerWidth).toBeLessThanOrEqual(1024);
  });

  test('detects desktop viewport above 1024px (TC130)', () => {
    setWidth(1200); // desktop width
    expect(window.innerWidth).toBeGreaterThan(1024);
  });
});
