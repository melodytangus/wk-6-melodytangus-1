## CleanCity Application – Test Plan (Phase 1)
## 1. Document Information
Version: 2.0
Date: November 9, 2025
Project Name: CleanCity – Waste Pickup Scheduler
Prepared By: Test Case Trio

## 2. Test Objectives
- Validate the functionality, usability, and reliability of the CleanCity application.
- Ensure key features such as user registration, login, waste pickup scheduling, and community features work correctly.
- Verify the app’s responsiveness across devices and browsers.
- Identify defects early and log them for developer resolution.
- Establish a baseline for automated and manual testing coverage.

## 3. Scope of Testing
In Scope
- Functional testing of user and admin features
- Form validation (registration, login, scheduling)
- UI/UX consistency testing
- Accessibility and usability testing
- Cross-browser and mobile responsiveness
- localStorage-based data persistence
- Early automated tests using Jest for critical workflows

Out of Scope
- Backend API or database testing (no server integration)
- Performance testing under production load
- Integration with third-party APIs

## 4. Team and roles
| Role          | Member                | Responsibilities                            |
| ------------- | --------------------- | ------------------------------------------- |
| Test Manager  | Mercy Melody Chemutai | Plan and monitor testing progress           |
| Test Executor | Susan Mwangi          | Execute test cases and log defects          |
| Risk Analyst  | Lorraine Bwayo        | Verify fixes and perform regression testing |

## 5. Test Environment
| Environment Component | Description                                          |
| --------------------- | ---------------------------------------------------- |
| Application Type      | Web (Frontend only)                                  |
| Test Platform         | Browser – Chrome, Edge, Firefox                      |
| Data Storage          | localStorage (no backend)                            |
| Test Devices          | Desktop, Tablet, Mobile                              |
| Tools                 | GitHub Kanban (for issue tracking), Browser DevTools |

## 6. Test items
- User Authentication: Registration, Login, Logout
- Waste Pickup Scheduling: Date, waste type, quantity, instructions
- Admin Functions: Approve, reject, or complete requests
- Blog & Community Pages: Post creation, editing, and viewing
- Accessibility: Keyboard navigation, color contrast, labels
- localStorage: Data persistence after page reload

## 7. Testing type
| Testing Type          | Description                                          |
| --------------------- | ---------------------------------------------------- |
| Functional Testing    | Verify all features behave as expected               |
| UI/UX Testing         | Ensure design consistency and clarity                |
| Validation Testing    | Confirm form inputs and constraints                  |
| Accessibility Testing | Screen reader, tab navigation, color contrast        |
| Compatibility Testing | Cross-browser and device responsiveness              |
| Regression Testing    | Re-test after bug fixes                              |
| Automated Testing     | Jest-based unit tests for forms and components       |
| Early Execution       | Manual exploratory testing and initial bug discovery |
|

## 8. Test Deliverables
- Test Plan (tests/test-plan.md)
- Test Data (tests/test-data.md)
- Test Cases and Reports (Phase 2)
- Bug Reports (via GitHub Issues)
- Final QA Summary Report

## 9. Schedule 
## Phase1
| Task                            | Start Date | End Date | Status      |
| ------------------------------- | ---------- | -------- | ----------- |
| Project setup and repo creation | Nov 3      | Nov 4    | Done        |
| Test plan and data preparation  | Nov 4      | Nov 5    | In Progress |
| Initial issue creation on board | Nov 5      | Nov 5    | Pending     |

## Phase 2
| Task                             | Start Date | End Date | Status      |
| -------------------------------- | ---------- | -------- | ----------- |
| Review Phase 1 outcomes          | Nov 6      | Nov 7    | Done        |
| Draft Phase 2 Test Cases         | Nov 7      | Nov 8    | Done        |
| Early Manual Testing             | Nov 8      | Nov 9    | In Progress |
| Automated Testing (Jest)         | Nov 8      | Nov 10   | In Progress |
| Defect Logging & Initial Review  | Nov 9      | Nov 11   | Pending     |
| Test Plan Update & Documentation | Nov 9      | Nov 11   | Pending     |

## 10.Test Cases
| Test Case ID | Feature             | Steps                                                    | Expected Result                                   | Status |
| ------------ | ------------------- | -------------------------------------------------------- | ------------------------------------------------- | ------ |
| TC001        | Registration        | Open page → Fill valid name/email/password → Submit      | Account created, confirmation displayed           | Draft  |
| TC002        | Login               | Open page → Enter valid email/password → Submit          | Redirect to Home/Dashboard, welcome message shown | Draft  |
| TC003        | Waste Pickup Form   | Open form → Fill name, location, type → Submit           | Success alert shown, data saved in localStorage   | Draft  |
| TC004        | Admin Update Status | Open admin panel → Select request → Change status → Save | Table updated, localStorage updated               | Draft  |
| TC005        | Feedback Form       | Fill request ID, reason → Submit                         | Feedback alert shown                              | Draft  |
| TC006        | Data Persistence    | Reload page after actions                                | Previously entered data remains                   | Draft  |
| TC007        | Accessibility       | Navigate using keyboard, check color contrast            | Focus visible, ARIA labels present                | Draft  |

## Notes
Initial Jest tests cover:
    Pickup Form validation and localStorage persistence
    Admin dashboard rendering and status updates
Manual exploratory tests confirm:
    Form error handling
    Alert messages
    Navigation links and responsive design
Defects identified in Phase 2 will be logged on GitHub with severity, description, and steps to reproduce

## 11.Approval
| Name                | Role         | Signature | Date |
| ------------------- | ------------ | --------- | ---- |
| Melody Tangus       | Test Manager |           |      |
| Instructor/Reviewer | QA Lead      |           |      |
