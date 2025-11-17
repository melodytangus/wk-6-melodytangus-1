from selenium import webdriver
from selenium.webdriver.common.by import By
import time

print("Starting CleanCity Selenium test...")

# --- Setup ---
driver = webdriver.Chrome()
driver.get("https://cleancitywastepickupscheduler.netlify.app/")
print("Page loaded.")

# --- Pause to visually confirm the page loaded ---
time.sleep(3)

# --- Locate login elements (update selectors if needed) ---
driver.find_element(By.NAME, "email").send_keys("tester@example.com")
driver.find_element(By.NAME, "password").send_keys("Password123")
driver.find_element(By.XPATH, "//button[text()='Login']").click()
print("Login submitted.")

# --- Wait for dashboard to load ---
time.sleep(5)

# --- Verify login success (update selector as needed) ---
try:
    welcome_text = driver.find_element(By.TAG_NAME, "h1").text
    assert "Welcome" in welcome_text
    print("Login test passed ✅")
except Exception as e:
    print("Login test failed ❌", e)

# --- Take a screenshot for PLP documentation ---
driver.save_screenshot("screenshots/login_test.png")

# --- Cleanup ---
driver.quit()
print("Browser closed.")
