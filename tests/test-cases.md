# CleanCity Application – Phase 2 Test Cases & Checklists

## Instructions
- Status options: Draft / In Progress / Pass / Fail
- Include comments for issues or special observations.

---

## 1. User Authentication

| Test Case ID | Feature       | Steps                                                         | Expected Result                               | Status  | Comments |
| ------------ | ------------- | ------------------------------------------------------------- | -------------------------------------------- | ------- | -------- |
| TC001        | Registration  | Open registration page → Fill valid data → Submit           | Account created, confirmation displayed      | Draft   |          |
| TC002        | Login         | Open login page → Enter valid email/password → Submit       | Redirect to dashboard, welcome message       | Draft   |          |
| TC003        | Invalid Login | Enter incorrect credentials → Submit                         | Error message displayed                        | Draft   |          |

---

## 2. Waste Pickup Scheduling

| Test Case ID | Feature           | Steps                                                      | Expected Result                              | Status  | Comments |
| ------------ | ---------------- | ---------------------------------------------------------- | -------------------------------------------- | ------- | -------- |
| TC004        | Form Validation   | Submit empty form                                         | Error messages for required fields           | Draft   |          |
| TC005        | Valid Submission  | Fill all fields correctly → Submit                        | Alert success, data stored in localStorage   | Draft   |          |
| TC006        | Data Persistence  | Reload page after submission                               | Previously entered data remains              | Draft   |          |

---

## 3. Admin Dashboard

| Test Case ID | Feature          | Steps                                                       | Expected Result                            | Status  | Comments |
| ------------ | ---------------- | ----------------------------------------------------------- | ------------------------------------------ | ------- | -------- |
| TC007        | Render Requests  | Load admin dashboard                                        | All requests from localStorage displayed   | Draft   |          |
| TC008        | Filter Requests  | Use location filter                                         | Only requests from selected location shown | Draft   |          |
| TC009        | Update Status    | Click "Mark as Scheduled"                                   | Status updated in UI and localStorage      | Draft   |          |

---

## 4. Accessibility & UI/UX

| Test Case ID | Feature         | Steps                                        | Expected Result                               | Status  | Comments |
| ------------ | --------------- | -------------------------------------------- | --------------------------------------------- | ------- | -------- |
| TC010        | Keyboard Nav    | Navigate entire app using keyboard          | Focus visible, all links and buttons usable  | Draft   |          |
| TC011        | Color Contrast  | Use contrast checker on all pages           | Pass WCAG minimum contrast standards          | Draft   |          |
| TC012        | Responsive UI   | Open app on desktop, tablet, mobile        | Layout adjusts without overlap or cutoff     | Draft   |          |
