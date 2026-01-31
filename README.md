# Swift Translator Playwright Tests

Automated Playwright tests for Swift Translator (Singlish → Sinhala) and helper Node script.

## Prerequisites
- Node.js 18+ (verify with `node -v`)
- Windows PowerShell (commands below assume PowerShell)

## Install
Install dependencies and Playwright browsers:

```powershell
npm install
npx playwright install
# or use the npm script
npm run install:browsers
```

## Run tests
- Headless (default):

```powershell
npm test
```

- Headed (visible browser):

```powershell
npm run test:headed
```

- Run the legacy Node script (uses Playwright API directly):

```powershell
node SwiftTranslatorTests\tests\swift-translator-node.js
# or via package script
npm run test:node
```

## Clean generated reports
Remove the HTML report and test-results folders if you want to clean up:

```powershell
Remove-Item -Recurse -Force playwright-report, test-results
```

## Where tests live
- Playwright tests: `tests/` (TypeScript Playwright tests)
- Legacy Node script: `SwiftTranslatorTests/tests/swift-translator-node.js`

## Troubleshooting
- If navigation or timeout errors occur, increase timeouts in `playwright.config.ts` or run headed to debug:

```powershell
npm run test:headed
```

- If browsers are missing, run `npx playwright install`.
- To view the last HTML report:

```powershell
npx playwright show-report
```

## Next steps (suggested)
- Convert the Node script into Playwright test files for unified reporting.
- Tweak selectors/timeouts for the target site (Swift Translator).

---
Created to help run and maintain the automated tests.
