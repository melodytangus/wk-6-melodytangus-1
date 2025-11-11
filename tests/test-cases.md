# CleanCity Application – Phase 2 Test Cases & Checklists

# Instructions
# Status options: Draft / In Progress / Pass / Fail

# 1. User Authentication – Login

| Test Case ID | Feature                   | Steps                                                            | Expected Result                                  | Status | Comments |
| ------------ | ------------------------- | ---------------------------------------------------------------- | ------------------------------------------------ | ------ | -------- |
| TC001        | Valid Login               | Open `/login` → Enter valid email & password → Click **Sign In** | Redirected to dashboard with welcome message     | Draft  |          |
| TC002        | Invalid Password          | Enter valid email but incorrect password → Submit                | Error: *Invalid email or password*               | Draft  |          |
| TC003        | Invalid Email Format      | Enter invalid email format (e.g., `abc@`) → Submit               | Error message displayed: *Invalid email address* | Draft  |          |
| TC004        | Empty Fields              | Submit login form with empty fields                              | Validation prevents submission                   | Draft  |          |
| TC005        | Session Persistence       | Login → Refresh the page                                         | User remains logged in                           | Draft  |          |
| TC006        | Logout Function           | Login → Click **Logout**                                         | Redirected to home page, session cleared         | Draft  |          |
| TC007        | Unauthorized Access       | Try to visit `/dashboard` without logging in                     | Redirected to `/login`                           | Draft  |          |
| TC008        | Login Redirect After Auth | Log in → Ensure cannot access `/login` again                     | Redirected to `/dashboard`                       | Draft  |          |

---

# 2. User Authentication – Registration

| Test Case ID | Feature              | Steps                                         | Expected Result                          | Status | Comments |
| ------------ | -------------------- | --------------------------------------------- | ---------------------------------------- | ------ | -------- |
| TC009        | Valid Registration   | Fill all fields correctly → Submit            | Success message → Redirect to login page | Draft  |          |
| TC010        | Empty Fields         | Submit form without filling any field         | Display validation errors for all fields | Draft  |          |
| TC011        | Empty Name           | Leave Name blank → Submit                     | Error: *Name is required*                | Draft  |          |
| TC012        | Invalid Email Format | Enter invalid email → Submit                  | Error: *Enter valid email address*       | Draft  |          |
| TC013        | Short Password       | Enter password with less than 6 characters    | Error: *Password too short*              | Draft  |          |
| TC014        | Password Mismatch    | Password ≠ Confirm Password → Submit          | Error: *Passwords do not match*          | Draft  |          |
| TC015        | Duplicate Email      | Register using existing email                 | Error: *User already exists*             | Draft  |          |
| TC016        | Successful Redirect  | Complete registration → Redirects to `/login` | Redirect successful                      | Draft  |          |

---

# 3. Authorization & Access Control

| Test Case ID | Feature                           | Steps                                 | Expected Result                 | Status | Comments |
| ------------ | --------------------------------- | ------------------------------------- | ------------------------------- | ------ | -------- |
| TC017        | Authenticated User to `/login`    | Login → Visit `/login` manually       | Redirected to dashboard         | Draft  |          |
| TC018        | Authenticated User to `/register` | Login → Visit `/register` manually    | Redirected to dashboard         | Draft  |          |
| TC019        | Guest Access to Dashboard         | Log out → Visit `/dashboard`          | Redirected to `/login`          | Draft  |          |
| TC020        | Guest Access to `/admin`          | Visit `/admin` while logged out       | Redirected to `/login`          | Draft  |          |
| TC021        | Non-Admin User Access to `/admin` | Login as normal user → Visit `/admin` | Access denied or redirected     | Draft  |          |
| TC022        | Guest Access to `/feedback`       | Visit `/feedback` while not logged in | Redirected to `/login`          | Draft  |          |
| TC023        | Admin Role Verification           | Login as admin → Access `/admin`      | Admin dashboard loads correctly | Draft  |          |

---

# 4. Waste Pickup Scheduling (/home)

| Test Case ID | Feature                  | Steps                                   | Expected Result                     | Status | Comments |
| ------------ | ------------------------ | --------------------------------------- | ----------------------------------- | ------ | -------- |
| TC024        | Page Load                | Navigate to `/home`                     | Waste pickup form visible           | Draft  |          |
| TC025        | Empty Form Submission    | Submit without filling form             | Display required field errors       | Draft  |          |
| TC026        | Invalid Input (Location) | Enter numbers only in Location → Submit | Error message for invalid format    | Draft  |          |
| TC027        | Missing Waste Type       | Leave *Waste Type* empty → Submit       | Error: *Waste Type is required*     | Draft  |          |
| TC028        | Valid Form Submission    | Fill all fields correctly → Submit      | Success message, data saved         | Draft  |          |
| TC029        | Data Persistence         | Submit valid request → Refresh page     | Previously entered requests visible | Draft  |          |
| TC030        | Multiple Submissions     | Submit several valid requests           | All requests appear in dashboard    | Draft  |          |
| TC031        | Clear Form After Submit  | Submit valid form                       | Form resets after success message   | Draft  |          |

---

# 5. User Dashboard (/dashboard)

| Test Case ID | Feature            | Steps                                  | Expected Result                       | Status | Comments |
| ------------ | ------------------ | -------------------------------------- | ------------------------------------- | ------ | -------- |
| TC032        | View Requests      | Login → Go to dashboard                | All user pickup requests displayed    | Draft  |          |
| TC033        | Filter by Status   | Apply filter “Scheduled”               | Only scheduled pickups displayed      | Draft  |          |
| TC034        | Filter by Location | Choose location filter → Apply         | Filtered results displayed correctly  | Draft  |          |
| TC035        | Status Update      | Mark a pickup as “Completed”           | Status updates in UI and localStorage | Draft  |          |
| TC036        | Pagination Display | Scroll or navigate through table pages | All pages load data properly          | Draft  |          |
| TC037        | Request Count      | Check request counter on dashboard     | Count matches total displayed         | Draft  |          |
| TC038        | Delete Request     | Delete a request                       | Request removed successfully          | Draft  |          |
| TC039        | Data Retention     | Refresh after deleting                 | Deleted data not reappearing          | Draft  |          |

---

# 6. Admin Panel (/admin)

| Test Case ID | Feature                     | Steps                                | Expected Result                          | Status | Comments |
| ------------ | --------------------------- | ------------------------------------ | ---------------------------------------- | ------ | -------- |
| TC040        | Admin Access                | Login as admin → Go to `/admin`      | Admin dashboard loads                    | Draft  |          |
| TC041        | View All Requests           | Open request list                    | All user requests displayed              | Draft  |          |
| TC042        | Filter by Location          | Use filter → Select city             | Requests filtered correctly              | Draft  |          |
| TC043        | Update Request Status       | Mark “Scheduled” → “Completed”       | Status updates successfully              | Draft  |          |
| TC044        | Invalid Update Attempt      | Try to update already completed task | Error: *Cannot update completed request* | Draft  |          |
| TC045        | Data Sync                   | Update request → Refresh page        | Data remains updated                     | Draft  |          |
| TC046        | View Statistics             | Check dashboard stats section        | Accurate counts of requests displayed    | Draft  |          |
| TC047        | Unauthorized Access Attempt | Non-admin visits `/admin`            | Redirected to `/login`                   | Draft  |          |
| TC048        | Admin Logout                | Click logout                         | Session cleared → Redirected to `/`      | Draft  |          |

---

# 7. Feedback Page (/feedback)

| Test Case ID | Feature               | Steps                               | Expected Result                      | Status | Comments |
| ------------ | --------------------- | ----------------------------------- | ------------------------------------ | ------ | -------- |
| TC049        | Page Load             | Navigate to `/feedback`             | Form and fields visible              | Draft  |          |
| TC050        | Empty Form Submission | Click Submit without filling fields | Required field errors displayed      | Draft  |          |
| TC051        | Partial Input         | Fill only Name → Submit             | Error: *Message required*            | Draft  |          |
| TC052        | Valid Submission      | Fill all fields → Submit            | Success confirmation message         | Draft  |          |
| TC053        | Data Persistence      | Refresh after submit                | Form resets, confirmation disappears | Draft  |          |
| TC054        | Invalid Email Input   | Enter bad email → Submit            | Error: *Enter valid email*           | Draft  |          |
| TC055        | Character Limit       | Enter 500+ characters → Submit      | Error: *Message too long*            | Draft  |          |

---

# 8. Blog Module (/blog, /blog/admin)

| Test Case ID | Feature                  | Steps                            | Expected Result                  | Status | Comments |
| ------------ | ------------------------ | -------------------------------- | -------------------------------- | ------ | -------- |
| TC056        | View Blog Page           | Navigate to `/blog`              | List of blog posts displayed     | Draft  |          |
| TC057        | View Blog Article        | Click on an article              | Full article opens correctly     | Draft  |          |
| TC058        | Invalid Article ID       | Visit `/blog/9999`               | Error or “Not Found” message     | Draft  |          |
| TC059        | Admin Login for Blog     | Login as admin → `/blog/admin`   | Blog admin dashboard visible     | Draft  |          |
| TC060        | Create Blog Post         | Add title + content → Save       | Post added successfully          | Draft  |          |
| TC061        | Edit Blog Post           | Modify existing post → Save      | Updated post content visible     | Draft  |          |
| TC062        | Delete Blog Post         | Delete an article                | Removed from blog list           | Draft  |          |
| TC063        | Unauthorized Blog Access | Normal user visits `/blog/admin` | Redirected to `/login` or denied | Draft  |          |

---

# 9. UI/UX & Navigation

| Test Case ID | Feature                    | Steps                                           | Expected Result                      | Status | Comments |
| ------------ | -------------------------- | ----------------------------------------------- | ------------------------------------ | ------ | -------- |
| TC064        | Home Navigation            | Click logo → Navigate home                      | Redirected to home page              | Draft  |          |
| TC065        | Navbar Links               | Click each nav link (Home, Dashboard, Feedback) | Redirects correctly                  | Draft  |          |
| TC066        | Footer Links               | Scroll → Click footer link                      | Opens correct external/internal link | Draft  |          |
| TC067        | Responsive Design – Mobile | Open app on mobile                              | Layout adapts properly               | Draft  |          |
| TC068        | Responsive Design – Tablet | Open app on tablet                              | Layout adapts properly               | Draft  |          |
| TC069        | Keyboard Navigation        | Use Tab key to navigate                         | All buttons/links focusable          | Draft  |          |
| TC070        | Color Contrast             | Check contrast ratio                            | Meets WCAG standards                 | Draft  |          |
| TC071        | Font Readability           | Verify font sizes & weights                     | Text clear across all devices        | Draft  |          |
| TC072        | Loading Speed              | Test app load time                              | Loads under 3 seconds                | Draft  |          |
| TC073        | Broken Links               | Click all navigational links                    | No broken links found                | Draft  |          |

---

# 10. Security & Data Validation

| Test Case ID | Feature                | Steps                                  | Expected Result                         | Status | Comments |
| ------------ | ---------------------- | -------------------------------------- | --------------------------------------- | ------ | -------- |
| TC074        | Password Encryption    | Inspect stored user data               | Passwords stored as hashes              | Draft  |          |
| TC075        | Data Access Control    | Verify user cannot access others’ data | Access restricted properly              | Draft  |          |
| TC076        | Input Sanitization     | Enter special chars in input fields    | App escapes/sanitizes inputs            | Draft  |          |
| TC077        | Prevent XSS            | Inject script tag in input             | Script not executed                     | Draft  |          |
| TC078        | Prevent SQL Injection  | Try `' OR 1=1--` in input              | Request blocked or sanitized            | Draft  |          |
| TC079        | Secure Session Storage | Inspect local/session storage          | Sensitive data not stored in plain text | Draft  |          |
| TC080        | HTTPS Verification     | Access via HTTPS                       | App enforces HTTPS redirect             | Draft  |          |
| TC081        | Logout Session Clear   | Logout → Check localStorage            | Tokens cleared properly                 | Draft  |          |

---

# 11. Performance & Bug Verification

| Test Case ID | Feature               | Steps                            | Expected Result                    | Status | Comments |
| ------------ | --------------------- | -------------------------------- | ---------------------------------- | ------ | -------- |
| TC082        | Eldoret Filter Bug    | Filter dashboard by *Eldoret*    | Correct location data shown        | Draft  |          |
| TC083        | Multiple Filter Use   | Apply multiple filters           | Combined filters work correctly    | Draft  |          |
| TC084        | Rapid Submissions     | Submit form repeatedly           | App prevents duplicates            | Draft  |          |
| TC085        | Offline Mode          | Disable internet → Reload app    | App handles offline gracefully     | Draft  |          |
| TC086        | Broken Image Check    | Browse all pages                 | No missing images                  | Draft  |          |
| TC087        | Error Logging         | Trigger an intentional error     | Error logged without crash         | Draft  |          |
| TC088        | Load Test             | Simulate multiple users          | App remains stable                 | Draft  |          |
| TC089        | Browser Compatibility | Test on Chrome, Firefox, Edge    | App works across browsers          | Draft  |          |
| TC090        | Form Autofill         | Use browser autofill             | Autofilled values handled properly | Draft  |          |
| TC091        | Cache Handling        | Clear cache → Reload             | Data syncs correctly               | Draft  |          |
| TC092        | Unexpected Shutdown   | Close/reopen browser mid-session | App resumes correctly or logs out  | Draft  |          |

---
# Summary
**Total Test Cases:** 92
**Coverage:** Authentication, Authorization, Scheduling, Dashboard, Admin, Feedback, Blog, UI/UX, Security, Performance

