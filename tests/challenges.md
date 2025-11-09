# CleanCity Application – Phase 2 Challenges & Changes

## Challenges
1. **LocalStorage Testing:** Some early tests failed due to improper resetting of localStorage between test runs. Solved by mocking localStorage in `beforeEach`.  
2. **Responsive Design Issues:** Certain components overlapped on smaller screens. Noted for UI team to fix.  
3. **React Router Warnings:** Test logs showed deprecation warnings. No functional impact but requires future update to React Router v7 flags.  
4. **Form Validation:** Manual testing showed empty form submission did not always trigger error messages.

## Changes / Updates
- Added `jest.isolateModules` to ensure fresh script import per test.
- Created embedded HTML in test files to remove dependency on external HTML files.
- Expanded test cases to include accessibility and responsiveness.
- Defect logging standardized on GitHub issues for easier tracking.
