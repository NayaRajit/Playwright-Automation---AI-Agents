# NAYA Consumer Web Test Plan

## Application Overview

Fresh test plan for NAYA Consumer Web using the Naya_BugFix_Testing environment, with login, homepage search, account diagnostics, matter validation, and matter node verification.

## Test Scenarios

### 1. NAYA Consumer Web Functional Test Suite

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login and Environment Selection

**File:** `specs/naya-consumer-web-test-plan.md`

**Steps:**
  1. Open https://nayaconsumertesting.z20.web.core.windows.net/ in a browser.
    - expect: Azure AD B2C sign-in page appears.
  2. Enter email razit44mhj@gmail.com and password Razeet9818161010@##.
    - expect: Login succeeds and the user lands on the Environment page.
  3. Verify the environment list contains Naya_BugFix_Testing.
    - expect: Naya_BugFix_Testing is visible in the environment list.

#### 1.2. Search for Account Information

**File:** `specs/naya-consumer-web-test-plan.md`

**Steps:**
  1. Locate the homepage search field and search for razit44mhj@gmail.com.
    - expect: Search results appear and include the user account or related data.
  2. Verify account details related to the email are displayed.
    - expect: The application shows user account information for razit44mhj@gmail.com.

#### 1.3. Run Diagnostics

**File:** `specs/naya-consumer-web-test-plan.md`

**Steps:**
  1. Locate and execute the diagnostics action for the selected environment or account.
    - expect: Diagnostics starts and shows a status or results.
    - expect: Any errors are shown in a clear, user-friendly manner.

#### 1.4. Matter Presence and Decision Flow

**File:** `specs/naya-consumer-web-test-plan.md`

**Steps:**
  1. Select Naya_BugFix_Testing from the environment list.
    - expect: The app navigates to the Matter screen (#/Matter).
  2. Verify the total number of matters shown on the Matter page.
    - expect: If matter count is 0, the test ends and records the empty-state result.
    - expect: If at least one matter exists, proceed to matter node verification.

#### 1.5. Matter Node Presence Checks

**File:** `specs/naya-consumer-web-test-plan.md`

**Steps:**
  1. Open the matter card displayed on the Matter page.
    - expect: The matter detail page loads at a matter-specific route.
  2. Verify the matter detail page includes Checklist, Signature Packages, Closing Binder, Open Items, and Post Closing Items.
    - expect: Each of the specified node labels is visible and accessible.

#### 1.6. Matter Node Content Validation

**File:** `specs/naya-consumer-web-test-plan.md`

**Steps:**
  1. Open the Checklist node and review checklist items or statuses.
    - expect: Checklist content is visible and loads without errors.

  2. Open Signature Packages and verify package or signature content displays.
    - expect: Signature Packages section loads successfully.
    - Click: Download Button, verify signataure package downloaded successfully. 
    - expect after clicking download button, Success Message appears. 
  3. Open Closing Binder and verify binder contents are visible.
    - expect: Closing Binder section loads correctly.
    - Check for Download button, Click > Download: full binders.
    - Check for Download button, Click > expect : Download Selected Items -Download top  1 items first, then select all items and then download, 
        cont... Check for search , verify it is working 
    - After download , expect Success Message pop off/toast message.
  4. Open Open Items and verify open task or issue content.
    - expect: Open Items section loads and displays items.
  
  5. Open Post Closing Items and verify post-closing content displays.
    - expect: Post Closing Items section loads and shows content.
