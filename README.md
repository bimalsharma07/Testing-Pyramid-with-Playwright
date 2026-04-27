Automating the OrangeHRM demo site with Playwright.

Here's how this hierarchy works in our Playwright-based framework:

Unit Tests: Test isolated functions, utilities, helper methods.

Integration Tests: Test interactions between components (e.g., API client ↔ Backend).

E2E UI Tests: Simulate real user workflows across the entire application.

API Tests: Validate data flows and backend logic directly via API calls.

For the best workflow, aim for a ratio of about 70% unit tests, 20% integration tests, and 10% E2E/API tests