
# 🧹 CleanCity Application – Test Summary Report (Phase 2)

# 1. Project Name:

CleanCity – Waste Pickup Scheduler

# 2. Test Cycle Duration:

November 8–11, 2025

# 3. Prepared By:

|Name | Role |
--------------------------------------
| Mercy Melody Chemutai| Test Manager|
| Lorraine Bwayo | Test Executor |
| Susan Mwangi | Risk Analyst |


---

# 4. Objective:

The purpose of this test cycle was to verify functional, security, and UI stability across all major CleanCity modules.
Phase 2 we focused on validating the **login and registration workflows**, **pickup scheduling**, **admin panel**, **feedback module**, and **core system reliability** through manual and automated testing.

---

# 5. Test Environment:

| Component        | Description                            |
| ---------------- | -------------------------------------- |
| Operating System | Windows 10                             |
| Browser/Device   | Chrome (Desktop & Mobile),Edge,Firefox |
| Software Version | CleanCity v2.0                         |
| Test Tools Used  | Jest (Unit Testing), Manual UI Testing |

---

# 6. Test Summary

| Metric                         | Count / Percentage                                               |
| ------------------------------ | ---------------------------------------------------------------- |
| **Total Test Cases Planned**   | 92                                                               |
| **Total Test Cases Executed**  | 7                                                                |
| **Test Cases Passed**          | 7 (100%)                                                         |
| **Test Cases Failed**          | 0                                                                |
| **Test Cases Blocked/Skipped** | 0                                                                |
| **Defects Raised**             | 4                                                                |
| **Defects Closed**             | 0                                                                |
| **Test Coverage**              | ~80% (Core features covered; extended tests planned for Phase 3) |

---

# 7. Key Observations

* Core authentication and scheduling features worked as expected during initial functional tests.
* The application met key usability expectations on both desktop and mobile.
* Identified 4 open defects (validation, admin refresh, mobile UI overlap, authentication bypass).
* Jest unit tests passed successfully, confirming the integrity of form validation and dashboard logic.

---

# 8. Risks & Mitigations

| Risk                                                         | Mitigation                                                      |
| ------------------------------------------------------------ | --------------------------------------------------------------- |
| Authentication vulnerability could allow unauthorized access | Implement proper backend validation and hashed password storage |
| Form validation missing for some fields                      | Add JavaScript and backend validation checks                    |
| Dashboard not refreshing after updates                       | Introduce real-time state management or polling                 |
| Mobile layout overlaps on navbar                             | Apply responsive CSS grid/flexbox fixes before release          |

---

# 9. Recommendations

* Proceed with **defect fixes** before initiating full regression testing.
* Conduct **comprehensive cross-browser testing** in Phase 3.
* Integrate **backend API validation** to improve data consistency.
* Perform **UAT testing** once major defects are resolved to confirm readiness for deployment.

---

# Overall Test Outcome:

Phase 2 testing successfully validated core functionality, pending critical fixes.

