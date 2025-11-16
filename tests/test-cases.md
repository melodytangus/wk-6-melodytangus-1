# CleanCity Application – Phase 2 Test Cases & Checklists

# Instructions
# Status options: Draft / In Progress / Pass / Fail

| Test Case ID | Feature                           | Steps                                                            | Expected Result                                  | Status | Comments | Owner/Executor | Testing Environment   |
| ------------ | --------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------ | ------ | -------- | -------------- | --------------------- |
| TC001        | Valid Login                       | Open `/login` → Enter valid email & password → Click **Sign In** | Redirected to dashboard with welcome message     | Fail   |          | QA Team        | Chrome, Firefox, Edge |
| TC002        | Invalid Password                  | Enter valid email but incorrect password → Submit                | Error: *Invalid email or password*               | Fail   |          | QA Team        | Chrome, Firefox, Edge |
| TC003        | Invalid Email Format              | Enter invalid email format (e.g., `abc@`) → Submit               | Error message displayed: *Invalid email address* | Fail   |          | QA Team        | Chrome, Firefox, Edge |
| TC004        | Empty Fields                      | Submit login form with empty fields                              | Validation prevents submission                   | Fail   |          | QA Team        | Chrome, Firefox, Edge |
| TC005        | Session Persistence               | Login → Refresh the page                                         | User remains logged in                           | Pass   |          | QA Team        | Chrome, Firefox, Edge |
| TC006        | Logout Function                   | Login → Click **Logout**                                         | Redirected to home page, session cleared         | Pass   |          | QA Team        | Chrome, Firefox, Edge |
| TC007        | Unauthorized Access               | Try to visit `/dashboard` without logging in                     | Redirected to `/login`                           | Pass   |          | QA Team        | Chrome, Firefox, Edge |
| TC008        | Login Redirect After Auth         | Log in → Ensure cannot access `/login` again                     | Redirected to `/dashboard`                       | Pass   |          | QA Team        | Chrome, Firefox, Edge |
| TC009        | Valid Registration                | Fill all fields correctly → Submit                               | Success message → Redirect to login page         | Pass   |          | QA Team        | Chrome, Firefox, Edge |
| TC010        | Empty Fields                      | Submit form without filling any field                            | Display validation errors for all fields         | Pass   |          | QA Team        | Chrome, Firefox, Edge |
| TC011        | Empty Name                        | Leave Name blank → Submit                                        | Error: *Name is required*                        | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC012        | Invalid Email Format              | Enter invalid email → Submit                                     | Error: *Enter valid email address*               | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC013        | Short Password                    | Enter password with less than 6 characters                       | Error: *Password too short*                      | Fail   |          | QA Team        | Chrome, Firefox, Edge |
| TC014        | Password Mismatch                 | Password ≠ Confirm Password → Submit                             | Error: *Passwords do not match*                  | Fail   |          | QA Team        | Chrome, Firefox, Edge |
| TC015        | Duplicate Email                   | Register using existing email                                    | Error: *User already exists*                     | Fail   |          | QA Team        | Chrome, Firefox, Edge |
| TC016        | Successful Redirect               | Complete registration → Redirects to `/login`                    | Redirect successful                              | Pass   |          | QA Team        | Chrome, Firefox, Edge |
| TC017        | Authenticated User to `/login`    | Login → Visit `/login` manually                                  | Redirected to dashboard                          | Pass   |          | QA Team        | Chrome, Firefox, Edge |
| TC018        | Authenticated User to `/register` | Login → Visit `/register` manually                               | Redirected to dashboard                          | Pass   |          | QA Team        | Chrome, Firefox, Edge |
| TC019        | Guest Access to Dashboard         | Log out → Visit `/dashboard`                                     | Redirected to `/login`                           | Pass   |          | QA Team        | Chrome, Firefox, Edge |
| TC020        | Guest Access to `/admin`          | Visit `/admin` while logged out                                  | Redirected to `/login`                           | Pass   |          | QA Team        | Chrome, Firefox, Edge |
| TC021        | Non-Admin Access `/admin`         | Login as normal user → Visit `/admin`                            | Access denied or redirected                      | Pass   |          | QA Team        | Chrome, Firefox, Edge |
| TC022        | Guest Access to `/feedback`       | Visit `/feedback` while not logged in                            | Redirected to `/login`                           | Pass   |          | QA Team        | Chrome, Firefox, Edge |
| TC023        | Admin Role Verification           | Login as admin → Access `/admin`                                 | Admin dashboard loads correctly                  | Pass   |          | QA Team        | Chrome, Firefox, Edge |
| TC024        | Page Load `/home`                 | Navigate to `/home`                                              | Waste pickup form visible                        | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC025        | Empty Form Submission             | Submit without filling form                                      | Display required field errors                    | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC026        | Invalid Input (Location)          | Enter numbers only in Location → Submit                          | Error message for invalid format                 | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC027        | Missing Waste Type                | Leave *Waste Type* empty → Submit                                | Error: *Waste Type is required*                  | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC028        | Valid Form Submission             | Fill all fields correctly → Submit                               | Success message, data saved                      | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC029        | Data Persistence                  | Submit valid request → Refresh page                              | Previously entered requests visible              | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC030        | Multiple Submissions              | Submit several valid requests                                    | All requests appear in dashboard                 | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC031        | Clear Form After Submit           | Submit valid form                                                | Form resets after success message                | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC032        | View Requests                     | Login → Go to dashboard                                          | All user pickup requests displayed               | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC033        | Filter by Status                  | Apply filter “Scheduled”                                         | Only scheduled pickups displayed                 | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC034        | Filter by Location                | Choose location filter → Apply                                   | Filtered results displayed correctly             | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC035        | Status Update                     | Mark a pickup as “Completed”                                     | Status updates in UI and localStorage            | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC036        | Pagination Display                | Scroll or navigate through table pages                           | All pages load data properly                     | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC037        | Request Count                     | Check request counter on dashboard                               | Count matches total displayed                    | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC038        | Delete Request                    | Delete a request                                                 | Request removed successfully                     | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC039        | Data Retention                    | Refresh after deleting                                           | Deleted data not reappearing                     | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC040        | Admin Access                      | Login as admin → Go to `/admin`                                  | Admin dashboard loads                            | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC041        | View All Requests                 | Open request list                                                | All user requests displayed                      | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC042        | Filter by Location                | Use filter → Select city                                         | Requests filtered correctly                      | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC043        | Update Request Status             | Mark “Scheduled” → “Completed”                                   | Status updates successfully                      | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC044        | Invalid Update Attempt            | Try to update already completed task                             | Error: *Cannot update completed request*         | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC045        | Data Sync                         | Update request → Refresh page                                    | Data remains updated                             | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC046        | View Statistics                   | Check dashboard stats section                                    | Accurate counts of requests displayed            | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC047        | Unauthorized Access Attempt       | Non-admin visits `/admin`                                        | Redirected to `/login`                           | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC048        | Admin Logout                      | Click logout                                                     | Session cleared → Redirected to `/`              | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC049        | Page Load `/feedback`             | Navigate to `/feedback`                                          | Form and fields visible                          | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC050        | Empty Form Submission             | Click Submit without filling fields                              | Required field errors displayed                  | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC051        | Partial Input                     | Fill only Name → Submit                                          | Error: *Message required*                        | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC052        | Valid Submission                  | Fill all fields → Submit                                         | Success confirmation message                     | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC053        | Data Persistence                  | Refresh after submit                                             | Form resets, confirmation disappears             | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC054        | Invalid Email Input               | Enter bad email → Submit                                         | Error: *Enter valid email*                       | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC055        | Character Limit                   | Enter 500+ characters → Submit                                   | Error: *Message too long*                        | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC056        | View Blog Page                    | Navigate to `/blog`                                              | List of blog posts displayed                     | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC057        | View Blog Article                 | Click on an article                                              | Full article opens correctly                     | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC058        | Invalid Article ID                | Visit `/blog/9999`                                               | Error or “Not Found” message                     | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC059        | Admin Login for Blog              | Login as admin → `/blog/admin`                                   | Blog admin dashboard visible                     | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC060        | Create Blog Post                  | Add title + content → Save                                       | Post added successfully                          | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC061        | Edit Blog Post                    | Modify existing post → Save                                      | Updated post content visible                     | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC062        | Delete Blog Post                  | Delete an article                                                | Removed from blog list                           | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC063        | Unauthorized Blog Access          | Normal user visits `/blog/admin`                                 | Redirected to `/login` or denied                 | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC064        | Home Navigation                   | Click logo → Navigate home                                       | Redirected to home page                          | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC065        | Navbar Links                      | Click each nav link (Home, Dashboard, Feedback)                  | Redirects correctly                              | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC066        | Footer Links                      | Scroll → Click footer link                                       | Opens correct external/internal link             | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC067        | Responsive Design – Mobile        | Open app on mobile                                               | Layout adapts properly                           | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC068        | Responsive Design – Tablet        | Open app on tablet                                               | Layout adapts properly                           | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC069        | Keyboard Navigation               | Use Tab key to navigate                                          | All buttons/links focusable                      | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC070        | Color Contrast                    | Check contrast ratio                                             | Meets WCAG standards                             | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC071        | Font Readability                  | Verify font sizes & weights                                      | Text clear across all devices                    | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC072        | Loading Speed                     | Test app load time                                               | Loads under 3 seconds                            | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC073        | Broken Links                      | Click all navigational links                                     | No broken links found                            | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC074        | Password Encryption               | Inspect stored user data                                         | Passwords stored as hashes                       | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC075        | Data Access Control               | Verify user cannot access others’ data                           | Access restricted properly                       | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC076        | Input Sanitization                | Enter special chars in input fields                              | App escapes/sanitizes inputs                     | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC077        | Prevent XSS                       | Inject script tag in input                                       | Script not executed                              | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC078        | Prevent SQL Injection             | Try `' OR 1=1--` in input                                        | Request blocked or sanitized                     | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC079        | Secure Session Storage            | Inspect local/session storage                                    | Sensitive data not stored in plain text          | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC080        | HTTPS Verification                | Access via HTTPS                                                 | App enforces HTTPS redirect                      | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC081        | Logout Session Clear              | Logout → Check localStorage                                      | Tokens cleared properly                          | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC082        | Eldoret Filter Bug                | Filter dashboard by *Eldoret*                                    | Correct location data shown                      | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC083        | Multiple Filter Use               | Apply multiple filters                                           | Combined filters work correctly                  | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC084        | Rapid Submissions                 | Submit form repeatedly                                           | App prevents duplicates                          | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC085        | Offline Mode                      | Disable internet → Reload app                                    | App handles offline gracefully                   | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC086        | Broken Image Check                | Browse all pages                                                 | No missing images                                | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC087        | Error Logging                     | Trigger an intentional error                                     | Error logged without crash                       | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC088        | Load Test                         | Simulate multiple users                                          | App remains stable                               | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC089        | Browser Compatibility             | Test on Chrome, Firefox, Edge                                    | App works across browsers                        | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC090        | Form Autofill                     | Use browser autofill                                             | Autofilled values handled properly               | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC091        | Cache Handling                    | Clear cache → Reload                                             | Data syncs correctly                             | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC092        | Unexpected Shutdown               | Close/reopen browser mid-session                                 | App resumes correctly or logs out                | Draft  |          | QA Team        | Chrome, Firefox, Edge |
| TC093 | Notification on Pickup Schedule | Schedule a pickup → Check notifications | User receives notification | Draft | | QA Team | Chrome, Firefox, Edge, Mobile |
| TC094 | Email Notification | Schedule pickup → Trigger email | Email sent to user | Draft | | QA Team | Email client, Chrome |
| TC095 | SMS Notification | Schedule pickup → Trigger SMS | SMS sent to registered phone | Draft | | QA Team | Mobile device |
| TC096 | Edit Scheduled Pickup | Edit existing pickup | Changes saved & visible on dashboard | Draft | | QA Team | Chrome, Firefox, Edge |
| TC097 | Cancel Pickup | Cancel a scheduled pickup | Status changes to canceled | Draft | | QA Team | Chrome, Firefox, Edge |
| TC098 | Pickup History | Visit dashboard → View past pickups | All completed/canceled pickups listed | Draft | | QA Team | Chrome, Firefox, Edge |
| TC099 | Multiple Roles | Assign multiple roles → Login | Role permissions enforced correctly | Draft | | QA Team | Chrome, Firefox, Edge |
| TC100 | Admin Create User | Admin adds new user | User created successfully | Draft | | QA Team | Chrome, Firefox, Edge |
| TC101 | Admin Edit User | Admin edits existing user | Changes applied successfully | Draft | | QA Team | Chrome, Firefox, Edge |
| TC102 | Admin Delete User | Admin deletes user | User removed from system | Draft | | QA Team | Chrome, Firefox, Edge |
| TC103 | Feedback Analytics | Admin views feedback summary | Analytics charts correct | Draft | | QA Team | Chrome, Firefox, Edge |
| TC104 | Search Blog Posts | Enter keyword → Search | Matching blog posts displayed | Draft | | QA Team | Chrome, Firefox, Edge |
| TC105 | Pagination Blog Posts | Navigate pages in `/blog` | Correct posts displayed per page | Draft | | QA Team | Chrome, Firefox, Edge |
| TC106 | Blog Post Draft Save | Admin saves post as draft | Post saved, not published | Draft | | QA Team | Chrome, Firefox, Edge |
| TC107 | Blog Post Publish | Admin publishes post | Post visible to all users | Draft | | QA Team | Chrome, Firefox, Edge |
| TC108 | Blog Post Undo Delete | Delete → Undo | Post restored successfully | Draft | | QA Team | Chrome, Firefox, Edge |
| TC109 | Community Forum Post | Create forum post | Post visible in community section | Draft | | QA Team | Chrome, Firefox, Edge |
| TC110 | Community Forum Reply | Reply to forum post | Reply visible to all users | Draft | | QA Team | Chrome, Firefox, Edge |
| TC111 | Community Forum Like | Like a post | Like counter updates correctly | Draft | | QA Team | Chrome, Firefox, Edge |
| TC112 | Community Forum Report | Report inappropriate post | Admin notified, post flagged | Draft | | QA Team | Chrome, Firefox, Edge |
| TC113 | Gamification – Points Earn | Complete a pickup → Earn points | User points updated correctly | Draft | | QA Team | Chrome, Firefox, Edge |
| TC114 | Gamification – Leaderboard | Visit leaderboard | Top users displayed correctly | Draft | | QA Team | Chrome, Firefox, Edge |
| TC115 | Gamification – Badges Earn | Achieve milestone → Award badge | Badge added to profile | Draft | | QA Team | Chrome, Firefox, Edge |
| TC116 | Gamification – Badge Display | Visit profile | Badge visible on profile | Draft | | QA Team | Chrome, Firefox, Edge |
| TC117 | Admin – System Backup | Trigger backup | Backup completes successfully | Draft | | QA Team | Server environment |
| TC118 | Admin – System Restore | Restore from backup | System restored correctly | Draft | | QA Team | Server environment |
| TC119 | Security – CSRF Protection | Submit forms | CSRF tokens verified & requests blocked if invalid | Draft | | QA Team | Chrome, Firefox, Edge |
| TC120 | Security – Two-Factor Auth | Enable 2FA → Login | OTP required & verified | Draft | | QA Team | Mobile, Chrome |
| TC121 | Security – Password Reset | Request password reset | Reset email sent & works | Draft | | QA Team | Email client, Chrome |
| TC122 | Performance – Load Homepage | Simulate multiple users | Homepage loads under 3s | Draft | | QA Team | Load testing tool |
| TC123 | Performance – Dashboard Load | Simulate multiple users | Dashboard loads without errors | Draft | | QA Team | Load testing tool |
| TC124 | Performance – Form Submission | Simulate multiple concurrent pickups | Form submissions processed | Draft | | QA Team | Load testing tool |
| TC125 | Integration – Payment Module | Submit payment | Payment recorded successfully | Draft | | QA Team | Chrome, Firefox, Edge |
| TC126 | Integration – Maps API | Enter location → Maps used | Correct location displayed on map | Draft | | QA Team | Chrome, Firefox, Edge |
| TC127 | Mobile Responsiveness – Android | Open app | Layout correct, no broken elements | Draft | | QA Team | Android devices |
| TC128 | Mobile Responsiveness – iOS | Open app | Layout correct, no broken elements | Draft | | QA Team | iOS devices |
| TC129 | Offline Data Save | Fill form offline → Reconnect | Data synced automatically | Draft | | QA Team | Chrome, Firefox, Mobile |
| TC130 | Multi-Language Support | Switch language → Verify text | All UI elements translated | Draft | | QA Team | Chrome, Firefox, Mobile |
