## CleanCity Application – Test Plan (Phase 1)
## 1. Document Information
Version: 1.0
Date: November 5, 2025
Project Name: CleanCity – Waste Pickup Scheduler
Prepared By: Test Case Trio

## 2. Test Objectives
- Validate the functionality, usability, and reliability of the CleanCity application.
- Ensure key features such as user registration, login, waste pickup scheduling, and community features work correctly.
- Verify that the app is responsive and performs consistently across major browsers and devices.
- Identify and log defects for developer resolution.

## 3. Scope of Testing
In Scope
- Functional testing of user and admin features
- Form validation (registration, login, scheduling)
- UI/UX consistency testing
- Accessibility and usability testing
- Cross-browser and mobile responsiveness
- localStorage-based data persistence

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
| Testing Type          | Description                                         |
| --------------------- | --------------------------------------------------- |
| Functional Testing    | Verify all features behave as expected              |
| UI/UX Testing         | Ensure design consistency and clarity               |
| Validation Testing    | Confirm form inputs and constraints                 |
| Accessibility Testing | Check screen reader and color contrast compliance   |
| Compatibility Testing | Verify responsiveness on different browsers/devices |
| Regression Testing    | Re-test after bug fixes                             |

## 8. Test Deliverables
- Test Plan (tests/test-plan.md)
- Test Data (tests/test-data.md)
- Test Cases and Reports (Phase 2)
- Bug Reports (via GitHub Issues)
- Final QA Summary Report

## 9. Schedule (Phase1)
| Task                            | Start Date | End Date | Status      |
| ------------------------------- | ---------- | -------- | ----------- |
| Project setup and repo creation | Nov 3      | Nov 4    | Done        |
| Test plan and data preparation  | Nov 4      | Nov 5    | In Progress |
| Initial issue creation on board | Nov 5      | Nov 5    | Pending     |

## 10.Approval
| Name                | Role         | Signature | Date |
| ------------------- | ------------ | --------- | ---- |
| Melody Tangus       | Test Manager |           |      |
| Instructor/Reviewer | QA Lead      |           |      |
