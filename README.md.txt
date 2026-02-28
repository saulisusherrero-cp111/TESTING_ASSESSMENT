FashionHub Automation Framework

Playwright + TypeScript | Multi‑Environment | Cross‑Browser | CI‑Ready | Powershell-terminal to run from command line

QUICK START =
This project was built to be extremely easy to run and evaluate.
Follow the steps below — the entire setup takes less than one minute.

✔ No manual browser installation
✔ No global dependencies required
✔ Multi‑environment support out of the box
✔ Cross‑browser execution enabled (Chromium, Firefox, WebKit-Safari)

1st step - Clone the repository =
git clone https://github.com/saulisusherrero-cp847/TESTING_ASSESSMENT
cd C:\Users\Administrator\TESTING_ASSESSMENT
2nd step - Install dependencies =
npm install
3rd step - Install Playwright browsers =
npx playwright install
(Playwright manages its own browser binaries — no system browsers required.)
4th step - Run the test for Login =
npx playwright test
Runs the login scenario on:
Chromium
Firefox
WebKit-Safari
5th step - Run tests against a specific environment =
The framework supports multi‑environment execution using:
CLI variable TEST_ENV (preferred)
Fallback: env.config.json
Production (default) :
TEST_ENV=production npx playwright test
Staging :
TEST_ENV=staging npx playwright test
Local :
TEST_ENV=local npx playwright test
6th - Run a specific test file (at presemt, the only one) =
npx playwright test Login.spec.ts
or by keyword:
npx playwright test login
7th Run only one browser =
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
8th Run the test opening visually the specified browser 
npx playwright test --project=chromium --headed
npx playwright test --project=firefox --headed
npx playwright test --project=webkit --headed
** NOTE 1 : It is not possible to open all browsers visually at the same time in a single Playwright execution. 
This is an official Playwright limitation: when running multiple projects, only one browser can be launched with a graphical user interface.
** NOTE 2 : Using Powershell you should run all the commands in this path : C:\Users\Administrator\TESTING_ASSESSMENT
As an example,
cd C:\Users\Administrator\TESTING_ASSESSMENT
npx playwright test

EXPLANATION HOW CAN I DO IT ANd WHY =
This repository contains a production‑ready UI automation framework built from scratch using Playwright and TypeScript, 
following the architectural and quality standards expected.

The framework implements the scenario requested in the selection challenge:
1- Validates that a user can successfully log in using valid credentials.
2- Confirms that the application displays a personalized welcome message.
3- Supports multiple environments (local, staging, production).
4- Runs cross‑browser (Chromium, Firefox, WebKit)-Safari.
5- Is architected for scalability, maintainability, and CI/CD integration.

This codebase demonstrates not only the ability to automate tests, but to design a sustainable automation platform.
That is muy personal way of work when I am focus as a hands-on Engineer.

LET ME STEP BY STEP EXPLAIN HOW AND WHY.

- Technology Choices (and WHY they were chosen) =

Why Playwright?
Playwright was selected because it provides key advantages aligned with modern enterprise QA engineering:
I mean,
-Cross‑browser support (Chromium, Firefox, WebKit-Safari) :
Native, fast, and reliable — ideal for compatibility testing.
-Auto‑waiting = stable tests :
Eliminates the classic Selenium flakiness (timeouts, stale elements).
-Powerful built‑in test runner :
No need for external frameworks like Jest or Mocha.
-First‑class support for multiple environments :
Configuration via CLI, environment variables, or JSON.
-Parallel execution, traces, videos, screenshots :
Perfect for debugging and CI pipelines.
-Cleaner syntax and faster execution :
Ideal for modern web applications.

Why Typescript?
TypeScript was chosen because:
-Type safety prevents bugs early :
Reduces runtime errors and makes refactoring safer.
-Strong IntelliSense and VS Code support :
Faster development and fewer mistakes.
-Better maintainability in large automation suites :
Types enable long‑term scaling of Page Objects and utilities.
-Modern and widely adopted in automation :
Playwright + TypeScript is becoming the industry standard.

- Architecture Overview =
TESTING_ASSESSMENT/
 ├── playwright.config.ts         → Global config (browsers, timeouts, baseURL, env logic)
 ├── env.config.json              → Fallback environment configuration
 ├── package.json                 → Dependencies & scripts
 └── src/
      ├── pages/                  → Page Object Model classes
      │      └── LoginPage.ts
      ├── tests/
      │      └── Login.spec.ts    → Login scenario test
      └── utils/                  → Utilities (envResolver.ts, testHelpers.ts)

 -  Architectural goals =
Strong separation of concerns.
Page Objects abstract UI complexity.
Tests remain clean and readable.
Configuration centralized.
CI-compatible from day one.
Easily expandable into a full UI automation suite.

-  Environment Strategy =
The challenge requires tests to run against:
Local
Staging
Production

This framework uses a two‑level resolution strategy:
Primary → Environment variable (TEST_ENV)
Secondary → env.config.json (fallback)

This architecture enables clean, environment-agnostic tests.

-  Cross‑Browser Execution =
Defined in playwright.config.ts:

Chromium (Chrome)
Firefox
WebKit (Safari)

Playwright handles browser binaries internally via:
npx playwright install

No manual browser installation required.

- Login Test (Challenge Scenario) =
The implemented test validates:

Navigation to login page
Username and password input
Form submission
Presence of personalized welcome message

Structure (using Page Object Model): This keeps test intent readable while isolating UI logic in the Page Object.

-  Installation Instructions
Install dependencies:
npm install

-  Install Playwright browsers:
npx playwright install
(Required so tests can run on Chromium, Firefox, WebKit-Safari.)

- Running the Test Suite
Run all tests:
npx playwright test

Run in specific environments:
TEST_ENV=local npx playwright test
TEST_ENV=staging npx playwright test
TEST_ENV=production npx playwright test

Run only Chromium:
npx playwright test --project=chromium

Show the HTML report:
npx playwright show-report

-  Page Object Model Design:
The Page Object for login encapsulates:

Navigation (goto())
Credential input (fillCredentials())
Submission (submitLogin())
UI assertions (assertWelcome())

This enforces:
Low coupling
Reusability
Maintainability
Test readability

- Scalability & CI/CD Readiness :
This framework is designed for:
-Parallel test execution
Native Playwright capability.
-Jenkins / GitHub Actions integration
Environment config via TEST_ENV makes CI pipelines trivial.
-Docker compatibility
Playwright has an official image ready for CI runners.
-Reporting (trace, video, screenshot)
Already built into Playwright.
-Easy expansion
Add new Pages and tests without structural changes.

MY PROFESSIONAL THOUGHTS =
1-Modern tech stack aligned with industry trends
2-Structured, maintainable automation design
3-Environment abstraction cleanly implemented
4-Cross‑browser testing enabled from the first test
5-CI/CD ready without modifications
6-Strong separation of concerns
7-Clean, readable tests for business visibility
8-Page Object Model for maintainability and scalability
9-Error‑resistant TypeScript implementation

This project is intentionally lightweight in features but enterprise‑grade in architecture.

AS A PERSONAL CONCLUSION =
his automation framework was designed with a technical lead mindset, delivering:

Clean architecture
Modern tooling
Strong test design patterns
Multi‑environment & cross‑browser support
Maintainability and long‑term scalability
Professional documentation

It is ready to evolve into a full, robust UI automated regression suite.