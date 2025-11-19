# CleanCity Application – Test Cases & Checklists

# Instructions
# Status options: Draft / In Progress / Pass / Fail

| Test Case ID | Feature | Steps | Expected Result | Status | Comments | Owner/Executor | Testing Environment |
| ------------ | -------- | ------ | ---------------- | ------ | -------- | -------------- | --------------------- |
| TC001 | Valid Login | Open `/login` → Enter valid email & password → Click **Log in** | Redirected to dashboard with welcome message | Pass | Test executed successfully. User redirected to dashboard with correct welcome message. Session token generated properly. | Susan Mwangi | Chrome, Firefox, Edge |
| TC002 | Invalid Password | Enter valid email but incorrect password → Submit | Error: *Invalid email or password* | Fail | Error message not displaying correctly. Expected "Invalid email or password" but no error shown on screen. Authentication logic needs review. | Susan Mwangi | Chrome, Firefox, Edge |
| TC003 | Invalid Email Format | Enter invalid email format (e.g., `abc@`) → Submit | Error message displayed: *Invalid email address* | Fail | Email validation not working. System accepts malformed email addresses (e.g., abc@) without showing error message. Frontend validation needs implementation.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC004 | Empty Fields | Submit login form with empty fields | Validation prevents submission | Fail | Form submission allowed with empty fields. No validation errors displayed. Required field validation missing on both frontend and backend.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC005 | Session Persistence | Login → Refresh the page | User remains logged in | Pass | Session maintained correctly after page refresh. User remains authenticated and can access protected routes.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC006 | Logout Function | Login → Click **Logout** | Redirected to home page, session cleared | Pass | Logout works as expected. Session cleared from storage and user redirected to home page successfully.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC007 | Unauthorized Access | Try to visit `/dashboard` without logging in | Redirected to `/login` | Pass | Route protection working correctly. Unauthenticated users attempting to access /dashboard are properly redirected to login page.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC008 | Login Redirect After Auth | Log in → Ensure cannot access `/login` again | Redirected to `/dashboard` | Pass | Authenticated users cannot access login page. Proper redirect to dashboard implemented.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC009 | Valid Registration | Fill all fields correctly → Submit | Success message → Redirect to login page | Pass | Registration flow works correctly. User created successfully, confirmation message displayed, and redirect to login page executed.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC010 | Empty Fields | Submit form without filling any field | Display validation errors for all fields | Pass | Validation working properly. All required field errors displayed when form submitted empty.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC011 | Empty Name | Leave Name blank → Submit | Error: *Name is required* | Pass | Name field validation functioning correctly. Error message "Name is required" displayed when field left blank.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC012 | Invalid Email Format | Enter invalid email → Submit | Error: *Enter valid email address* | Pass | Email format validation working as expected. Invalid email formats properly rejected with appropriate error message.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC013 | Short Password | Enter password with less than 6 characters | Error: *Password too short* | Fail | Password length validation not enforced. System accepts passwords shorter than 6 characters without displaying error message.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC014 | Password Mismatch | Password ≠ Confirm Password → Submit | Error: *Passwords do not match* | Fail | Password confirmation validation missing. System allows registration even when password and confirm password fields don't match.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC015 | Duplicate Email | Register using existing email | Error: *User already exists* | Fail | Duplicate email check not working. System allows registration with existing email addresses. Database constraint or validation missing.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC016 | Successful Redirect | Complete registration → Redirects to `/login` | Redirect successful | Pass | Post-registration redirect functioning correctly. User taken to login page after successful registration.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC017 | Authenticated User to `/login` | Login → Visit `/login` manually | Redirected to dashboard | Pass | Route guard working correctly. Logged-in users redirected to dashboard when attempting to access login page.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC018 | Authenticated User to `/register` | Login → Visit `/register` manually | Redirected to dashboard | Pass | Registration page properly protected. Authenticated users redirected to dashboard.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC019 | Guest Access to Dashboard | Log out → Visit `/dashboard` | Redirected to `/login` | Pass | Dashboard protection working as intended. Logged-out users redirected to login page.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC020 | Guest Access to `/admin` | Visit `/admin` while logged out | Redirected to `/login` | Pass | Admin route properly secured. Unauthorized access attempts redirected to login page.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC021 | Non-Admin Access `/admin` | Login as normal user → Visit `/admin` | Access denied or redirected | Pass | Role-based access control functioning correctly. Non-admin users denied access to admin routes.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC022 | Guest Access to `/feedback` | Visit `/feedback` while not logged in | Redirected to `/login` | Pass | Feedback page protected appropriately. Unauthenticated users redirected to login.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC023 | Admin Role Verification | Login as admin → Access `/admin` | Admin dashboard loads correctly | Pass | Admin authentication and authorization working correctly. Admin dashboard loads with proper permissions.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC024 | Page Load `/home` | Navigate to `/home` | Waste pickup form visible | Pass | Home page renders correctly. Waste pickup form visible and all form fields accessible.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC025 | Empty Form Submission | Submit without filling form | Display required field errors | Pass | Form validation working properly. Required field errors displayed when submitting empty form.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC026 | Invalid Input (Location) | Enter numbers only in Location → Submit | Error message for invalid format | Pass | Location field validation functioning correctly. Numeric-only inputs rejected with appropriate error message.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC027 | Missing Waste Type | Leave *Waste Type* empty → Submit | Error: *Waste Type is required* | Pass | Waste Type validation working as expected. Error displayed when field left empty.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC028 | Valid Form Submission | Fill all fields correctly → Submit | Success message, data saved | Pass | Form submission successful. Data saved correctly and success message displayed to user.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC029 | Data Persistence | Submit valid request → Refresh page | Previously entered requests visible | Fail | Data not persisting after page refresh. Previously submitted requests not visible. Storage mechanism needs investigation.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC030 | Multiple Submissions | Submit several valid requests | All requests appear in dashboard | Pass | Multiple submissions handled correctly. All requests appear in dashboard without conflicts.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC031 | Clear Form After Submit | Submit valid form | Form resets after success message | Pass | Form reset functioning properly. All fields cleared after successful submission.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC032 | View Requests | Login → Go to dashboard | All user pickup requests displayed | Fail | Requests not displaying on dashboard. Either data retrieval or rendering logic has issues. Console shows no errors but table remains empty.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC033 | Filter by Status | Apply filter “Scheduled” | Only scheduled pickups displayed | Pass | Status filter working correctly. Only "Scheduled" pickups displayed when filter applied.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC034 | Filter by Location | Choose location filter → Apply | Filtered results displayed correctly | Fail | Location filter not functioning. Filter applied but results not filtered correctly. All locations still displayed.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC035 | Status Update | Mark a pickup as “Completed” | Status updates in UI and localStorage | Fail | Status update not working. UI shows change but data not persisted. Refresh reverts to original status.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC036 | Pagination Display | Scroll or navigate through table pages | All pages load data properly | Pass | Pagination functioning correctly. All pages load data properly without errors.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC037 | Request Count | Check request counter on dashboard | Count matches total displayed | Fail | Request counter showing incorrect count. Display shows different number than actual requests in table.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC038 | Delete Request | Delete a request | Request removed successfully | Fail | Delete functionality not working. Request appears removed from UI but data not deleted from storage. Reappears on refresh.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC039 | Data Retention | Refresh after deleting | Deleted data not reappearing | Fail | Deleted data reappearing after refresh. Delete operation not persisting to storage layer.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC040 | Admin Access | Login as admin → Go to `/admin` | Admin dashboard loads | Pass | Admin dashboard loading correctly for users with admin role. All admin features accessible.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC041 | View All Requests | Open request list | All user requests displayed | Fail | Admin cannot view all user requests. List appears empty despite existing requests in system. | Susan Mwangi | Chrome, Firefox, Edge |
| TC042 | Filter by Location | Use filter → Select city | Requests filtered correctly | Fail | Location filter in admin panel not working. No filtering occurs when location selected.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC043 | Update Request Status | Mark “Scheduled” → “Completed” | Status updates successfully | Fail | Admin status updates not persisting. Changes visible temporarily but revert after page refresh.
 | Susan Mwangi | Chrome, Firefox, Edge |
| TC044 | Invalid Update Attempt | Try to update already completed task | Error: *Cannot update completed request* | Fail | No validation preventing updates to completed requests. System should block these attempts but currently allows them.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC045 | Data Sync | Update request → Refresh page | Data remains updated | Fail | Data synchronization failing. Updates made by admin not persisting after page refresh.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC046 | View Statistics | Check dashboard stats section | Accurate counts of requests displayed | Pass | Dashboard statistics displaying correctly. Request counts accurate and update in real-time.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC047 | Unauthorized Access Attempt | Non-admin visits `/admin` | Redirected to `/login` | Pass | Non-admin access properly blocked. Users without admin role redirected to login page.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC048 | Admin Logout | Click logout | Session cleared → Redirected to `/` | Pass | Admin logout functioning correctly. Session cleared and user redirected to home page.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC049 | Page Load `/feedback` | Navigate to `/feedback` | Form and fields visible | Fail | Feedback page not loading correctly. Form elements missing or not rendering properly.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC050 | Empty Form Submission | Click Submit without filling fields | Required field errors displayed | Pass | Validation working correctly. Required field errors displayed when form submitted empty.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC051 | Partial Input | Fill only Name → Submit | Error: *Message required* | Pass | Partial validation functioning properly. Message field validation triggers when only name provided.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC052 | Valid Submission | Fill all fields → Submit | Success confirmation message | Pass | Feedback submission successful. Confirmation message displayed and data saved correctly.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC053 | Data Persistence | Refresh after submit | Form resets, confirmation disappears | Pass | Form reset behavior correct. Form clears and confirmation disappears after refresh as expected.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC054 | Invalid Email Input | Enter bad email → Submit | Error: *Enter valid email* | Pass | Email validation working properly. Invalid email formats rejected with appropriate error message.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC055 | Character Limit | Enter 500+ characters → Submit | Error: *Message too long* | Fail | Character limit validation not enforced. System accepts messages exceeding 500 characters without error.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC056 | View Blog Page | Navigate to `/blog` | List of blog posts displayed | Pass | Blog page loads correctly. List of blog posts displayed with proper formatting.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC057 | View Blog Article | Click on an article | Full article opens correctly | Draft |  | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC058 | Invalid Article ID | Visit `/blog/9999` | Error or “Not Found” message | Draft | | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC059 | Admin Login for Blog | Login as admin → `/blog/admin` | Blog admin dashboard visible | Draft | | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC060 | Create Blog Post | Add title + content → Save | Post added successfully | Draft | | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC061 | Edit Blog Post | Modify existing post → Save | Updated post content visible | Draft | | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC062 | Delete Blog Post | Delete an article | Removed from blog list | Draft | | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC063 | Unauthorized Blog Access | Normal user visits `/blog/admin` | Redirected to `/login` or denied | Draft | | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC064 | Home Navigation | Click logo → Navigate home | Redirected to home page | Pass | Logo navigation working correctly. Clicking logo redirects to home page as expected.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC065 | Navbar Links | Click each nav link (Home, Dashboard, Feedback) | Redirects correctly | Pass | All navigation links functioning properly. Correct redirects for Home, Dashboard, and Feedback links.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC066 | Footer Links | Scroll → Click footer link | Opens correct external/internal link | Draft | Footer functionality not yet tested. Awaiting completion of footer implementation.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC067 | Responsive Design – Mobile | Open app on mobile | Layout adapts properly | Fail | Mobile layout breaking on smaller screens. Elements overlapping and some content not accessible.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC068 | Responsive Design – Tablet | Open app on tablet | Layout adapts properly | Pass | Tablet view working correctly. Layout adapts properly to tablet screen sizes.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC069 | Keyboard Navigation | Use Tab key to navigate | All buttons/links focusable | Pass | Keyboard accessibility functioning well. All interactive elements focusable via Tab key.
 | Mercy Melody Chemutai | Chrome, Firefox,Edge |
| TC070 | Color Contrast | Check contrast ratio | Meets WCAG standards | Draft | Accessibility audit pending. WCAG contrast testing not yet completed.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC071 | Font Readability | Verify font sizes & weights | Text clear across all devices | Pass | Typography clear and readable across all tested devices and screen sizes.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC072 | Loading Speed | Test app load time | Loads under 3 seconds | Pass | Performance acceptable. Application loads under 3 seconds consistently.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC073 | Broken Links | Click all navigational links | No broken links found | Pass | All navigation links functional. No broken or dead links found during testing.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC074 | Password Encryption | Inspect stored user data | Passwords stored as hashes | Pass | Password security implemented correctly. All passwords stored as hashed values, not plain text. | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC075 | Data Access Control | Verify user cannot access others’ data | Access restricted properly | Pass | Data isolation working properly. Users cannot access other users' data.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC076 | Input Sanitization | Enter special chars in input fields | App escapes/sanitizes inputs | Fail | Input sanitization missing. Special characters not being escaped or sanitized properly across forms.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC077 | Prevent XSS | Inject script tag in input | Script not executed | Fail |Some fields in the form like 'Username Field' are not 'Whitelisted' to contain input to text/numerics only. This leaves the app vulnerable due to lack of data sanitization. If a hacker was to inject a malicious script and the server reflects it, it can easily lead to delivery of malware or credential theft and other attacks | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC078 | Prevent SQL Injection | Try `' OR 1=1--` in input | Request blocked or sanitized | Fail | SQL injection vulnerability detected. Test inputs like ' OR 1=1-- not being blocked or sanitized properly.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC079 | Secure Session Storage | Inspect local/session storage | Sensitive data not stored in plain text | Pass | Session storage secure. No sensitive data stored in plain text in local or session storage.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC080 | HTTPS Verification | Access via HTTPS | App enforces HTTPS redirect | Fail | HTTPS not enforced. Application allows HTTP connections without redirecting to HTTPS.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC081 | Logout Session Clear | Logout → Check localStorage | Tokens cleared properly | Pass | Session cleanup working correctly. Authentication tokens cleared properly on logout.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC082 | Eldoret Filter Bug | Filter dashboard by *Eldoret* | Correct location data shown | Fail | Known bug confirmed. Filtering by Eldoret location returns incorrect or incomplete data.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC083 | Multiple Filter Use | Apply multiple filters | Combined filters work correctly | Fail | Combined filters not working together. Applying multiple filters causes conflicts or shows no results. | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC084 | Rapid Submissions | Submit form repeatedly | App prevents duplicates | Fail | No duplicate prevention implemented. Rapid form submissions create multiple identical entries.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC085 | Offline Mode | Disable internet → Reload app | App handles offline gracefully | Fail | No offline handling. Application shows blank screen or errors when internet connection lost.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC086 | Broken Image Check | Browse all pages | No missing images | Pass | All images loading correctly. No missing or broken image links found.
 | Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC087 | Error Logging | Trigger an intentional error | Error logged without crash | Pass | Error handling functioning properly. Errors logged without causing application crashes.
 |Mercy Melody Chemutai | Chrome, Firefox, Edge |
| TC088 | Load Test | Simulate multiple users | App remains stable | Pass | Application stable under load. Multiple concurrent users handled without performance degradation.
 | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC089 | Browser Compatibility | Test on Chrome, Firefox, Edge | App works across browsers | Pass | Cross-browser compatibility confirmed. Application functions correctly on Chrome, Firefox, and Edge.
  | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC090 | Form Autofill | Use browser autofill | Autofilled values handled properly | Pass | Browser autofill working properly. Autofilled values handled and processed correctly.
 | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC091 | Cache Handling | Clear cache → Reload | Data syncs correctly | Pass | Cache management functioning correctly. Data syncs properly after cache cleared.
 | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC092 | Unexpected Shutdown | Close/reopen browser mid-session | App resumes correctly or logs out | Pass | Session recovery working as expected. Application handles browser closure gracefully.
 | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC093 | Notification on Pickup Schedule | Schedule a pickup → Check notifications | User receives notification | Fail | In-app notifications not functioning. No notification displayed when pickup scheduled.
 | Lorraine Bwayo | Chrome, Firefox, Edge, Mobile |
| TC094 | Email Notification | Schedule pickup → Trigger email | Email sent to user | Fail | Email notification system not working. No emails sent when pickup scheduled. | Lorraine Bwayo | Email client, Chrome |
| TC095 | SMS Notification | Schedule pickup → Trigger SMS | SMS sent to registered phone | Fail | SMS functionality not implemented or not functioning. No SMS messages sent to users.
 | Lorraine Bwayo | Mobile device |
| TC096 | Edit Scheduled Pickup | Edit existing pickup | Changes saved & visible on dashboard | Fail | Edit functionality not working. Changes to scheduled pickups not saving correctly.
 | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC097 | Cancel Pickup | Cancel a scheduled pickup | Status changes to canceled | Fail | Cancel functionality missing or broken. Pickup status not updating to canceled.
 | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC098 | Pickup History | Visit dashboard → View past pickups | All completed/canceled pickups listed | Pass | History view working correctly. Past completed and canceled pickups displayed properly. | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC099 | Multiple Roles | Assign multiple roles → Login | Role permissions enforced correctly | Pass | Role-based permissions functioning correctly. Multiple role assignments enforced properly.
 | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC100 | Admin Create User | Admin adds new user | User created successfully | Fail | User creation by admin not working. Feature either missing or experiencing errors during user creation. | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC101 | Admin Edit User | Admin edits existing user | Changes applied successfully | Fail | User editing functionality not functional. Changes to user details not persisting.
 | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC102 | Admin Delete User | Admin deletes user | User removed from system | Fail | User deletion not working. Users not being removed from system when delete attempted.
 | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC103 | Feedback Analytics | Admin views feedback summary | Analytics charts correct | Fail | Analytics dashboard missing or not displaying data correctly. Charts not showing feedback summary. | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC104 | Search Blog Posts | Enter keyword → Search | Matching blog posts displayed | Pass | Blog search functioning correctly. Keyword searches return matching blog posts.
 | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC105 | Pagination Blog Posts | Navigate pages in `/blog` | Correct posts displayed per page | Pass | Blog pagination working properly. Correct posts displayed per page with functional navigation. | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC106 | Blog Post Draft Save | Admin saves post as draft | Post saved, not published | Draft | | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC107 | Blog Post Publish | Admin publishes post | Post visible to all users | Draft | | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC108 | Blog Post Undo Delete | Delete → Undo | Post restored successfully | Draft | | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC109 | Community Forum Post | Create forum post | Post visible in community section | Draft | | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC110 | Community Forum Reply | Reply to forum post | Reply visible to all users | Draft | | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC111 | Community Forum Like | Like a post | Like counter updates correctly | Draft | | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC112 | Community Forum Report | Report inappropriate post | Admin notified, post flagged | Fail | Report functionality not working. Admin notifications not being sent when posts reported. | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC113 | Gamification – Points Earn | Complete a pickup → Earn points | User points updated correctly | Pass | Points system working correctly. User points updated accurately after pickup completion.
 | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC114 | Gamification – Leaderboard | Visit leaderboard | Top users displayed correctly | Fail | Leaderboard not displaying correctly. Top users not showing or rankings incorrect.
 | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC115 | Gamification – Badges Earn | Achieve milestone → Award badge | Badge added to profile | Fail | Badge award system not functioning. Badges not being added to user profiles after milestones achieved.
 | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC116 | Gamification – Badge Display | Visit profile | Badge visible on profile | Fail | Badge display not working. Earned badges not visible on user profile. | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC117 | Admin – System Backup | Trigger backup | Backup completes successfully | Pass | Backup functionality working correctly. System backup completes successfully without errors. | Lorraine Bwayo | Server environment |
| TC118 | Admin – System Restore | Restore from backup | System restored correctly | Pass | Restore functionality tested successfully. System restored correctly from backup. | Lorraine Bwayo | Server environment |
| TC119 | Security – CSRF Protection | Submit forms | CSRF tokens verified & requests blocked if invalid | Draft | | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC120 | Security – Two-Factor Auth | Enable 2FA → Login | OTP required & verified | Fail | 2FA not implemented or not functioning. OTP verification not working. | Lorraine Bwayo | Mobile, Chrome |
| TC121 | Security – Password Reset | Request password reset | Reset email sent & works | Fail | Password reset flow broken. Reset emails not being sent or reset links not functioning.
 | Lorraine Bwayo | Email client, Chrome |
| TC122 | Performance – Load Homepage | Simulate multiple users | Homepage loads under 3s | Pass | Homepage performance acceptable. Loads under 3 seconds with multiple concurrent users.
 | Lorraine Bwayo | Load testing tool |
| TC123 | Performance – Dashboard Load | Simulate multiple users | Dashboard loads without errors | Pass | Dashboard performance satisfactory. Loads without errors under simulated load. | Lorraine Bwayo | Load testing tool |
| TC124 | Performance – Form Submission | Simulate multiple concurrent pickups | Form submissions processed | Pass | Form submission performance good. Concurrent submissions processed successfully.
 | Lorraine Bwayo | Load testing tool |
| TC125 | Integration – Payment Module | Submit payment | Payment recorded successfully | Fail | Payment integration not functional. Payment submissions not being recorded correctly.
 | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC126 | Integration – Maps API | Enter location → Maps used | Correct location displayed on map | Fail | Maps integration not working. Location not displaying on map when entered.
 | Lorraine Bwayo | Chrome, Firefox, Edge |
| TC127 | Mobile Responsiveness – Android | Open app | Layout correct, no broken elements | Fail | Android layout issues detected. Some elements broken or not displaying correctly on Android devices.
 | Lorraine Bwayo | Android devices |
| TC128 | Mobile Responsiveness – iOS | Open app | Layout correct, no broken elements | Fail | iOS compatibility issues found. Layout breaking on iOS devices, some features not accessible.
 | Lorraine Bwayo | iOS devices |
| TC129 | Offline Data Save | Fill form offline → Reconnect | Data synced automatically | Pass | Offline data sync working correctly. Form data saved offline and synced when connection restored. | Lorraine Bwayo | Chrome, Firefox, Mobile |
| TC130 | Multi-Language Support | Switch language → Verify text | All UI elements translated | Fail | Language switching not working. UI elements not translating when language changed.
 | Lorraine Bwayo | Chrome, Firefox, Mobile |
