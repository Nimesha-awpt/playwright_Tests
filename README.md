# Swift Translator Playwright Test Suite

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![Playwright](https://img.shields.io/badge/Playwright-1.58.0-blue)
![License](https://img.shields.io/badge/License-ISC-blue)
![Platform](https://img.shields.io/badge/Platform-Windows-lightgrey)

A comprehensive automated testing suite for the Swift Translator web application, designed to validate Singlish to Sinhala text conversion functionality. This project uses Playwright for robust end-to-end testing with both TypeScript and Node.js implementations.



- [Project Overview](#-project-overview)
- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Test Coverage](#-test-coverage)
- [Configuration](#-configuration)
- [Reports](#-reports)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)


This test suite validates the Swift Translator application's ability to accurately convert Singlish (Romanized Sinhala) to native Sinhala script. The tests cover various scenarios including:

- Simple daily conversations
- Questions and interrogatives
- Greetings and formal messages
- Different input lengths (Short, Medium, Large)
- Accuracy validation across diverse use cases



- **Dual Implementation**: Both Playwright TypeScript tests and legacy Node.js scripts
- **Comprehensive Coverage**: 40+ test cases covering various input types and scenarios
- **HTML Reports**: Detailed test execution reports with screenshots and traces
- **CSV Results**: Structured test results export for analysis
- **Headless & Headed Modes**: Flexible execution options
- **Cross-browser Support**: Configured for Chromium with extensibility for other browsers



- **Node.js** 18 or higher
- **npm** (comes with Node.js)
- **Windows PowerShell** (commands optimized for PowerShell)
- **Git** (for version control)



1. **Clone the repository** (if not already cloned):
   ```powershell
   git clone <repository-url>
   cd playwright_Tests
   ```

2. **Install dependencies**:
   ```powershell
   npm install
   ```

3. **Install Playwright browsers**:
   ```powershell
   npx playwright install
   
   npm run install:browsers
   ```





#### Headless Mode (Default)
```powershell
npm test
```

#### Headed Mode (Visible Browser)
```powershell
npm run test:headed
```

#### Legacy Node.js Script
```powershell
npm run test:node

node SwiftTranslatorTests/tests/swift-translator-node.js
```

### Viewing Reports

#### HTML Report
```powershell
npx playwright show-report
```

#### Clean Reports
```powershell
Remove-Item -Recurse -Force playwright-report, test-results
```

## 📁 Project Structure

```
playwright_Tests/
├── 📄 package.json                 # Project configuration and scripts
├── 📄 playwright.config.ts         # Playwright test configuration
├── 📄 example.spec.ts              # Example Playwright test file
├── 📁 playwright-report/           # Generated HTML test reports
├── 📁 test-results/                # Test execution artifacts
├── 📁 SwiftTranslatorTests/        # Legacy test implementation
│   ├── 📁 tests/
│   │   └── 📄 swift-translator-node.js  # Node.js test script
│   └── 📁 results/
│       └── 📄 test-results.csv     # CSV test results export
├── 📁 node_modules/                # Project dependencies
└── 📄 README.md                    # This file
```



The test suite includes comprehensive test cases categorized by:

### Input Length Types
- **S (Small)**: ≤30 characters
- **M (Medium)**: 31-60 characters  
- **L (Large)**: >60 characters

### Test Categories
- **Functional Tests**: Core translation functionality
- **Accuracy Validation**: Precision of Singlish to Sinhala conversion
- **Edge Cases**: Special characters, numbers, mixed content
- **User Scenarios**: Real-world usage patterns

### Sample Test Cases
| TC ID | Description | Input | Expected Output |
|-------|-------------|-------|-----------------|
| Pos_Fun_0001 | Casual group question | `oyaalaa udhee kaeema kaevadha?` | `ඔයාලා උදේ කෑම කැවද?` |
| Pos_Fun_0002 | Casual greeting | `oyaata suba aluth avurudhdhak` | `ඔයාට සුබ අලුත් අවුරුද්දක්` |
| Pos_Fun_0003 | Simple statement | `mama gedhara yanavaa.` | `මම ගෙදර යනවා.` |



### Playwright Configuration (`playwright.config.ts`)
- **Timeout**: 60 seconds
- **Retry Policy**: 2 retries in CI, 0 locally
- **Reporter**: HTML with trace on first retry
- **Browser**: Chromium (Desktop Chrome emulation)
- **Parallel Execution**: Fully parallel test runs

### Environment Variables
- `CI`: Enables CI-specific configurations (retries, workers)


### HTML Report Features
- **Test Execution Timeline**: Visual timeline of test runs
- **Screenshots**: Automatic screenshots on failures
- **Trace Files**: Detailed step-by-step execution traces
- **Error Details**: Comprehensive error information and stack traces

### CSV Results Export
The Node.js script generates structured CSV output with:
- Test Case ID
- Test Description
- Input Length Type
- Input/Expected/Actual Output
- Test Status
- Coverage Description

## 🔧 Troubleshooting

### Common Issues

#### Browser Installation Errors
```powershell

npx playwright install

npx playwright install --force
```

#### Timeout Issues
Increase timeouts in `playwright.config.ts`:
```typescript
export default defineConfig({
  timeout: 120 * 1000, 
  use: {
    navigationTimeout: 120 * 1000,
  },
});
```

#### Navigation Failures
Run tests in headed mode for debugging:
```powershell
npm run test:headed
```

#### Permission Issues (Windows)
Run PowerShell as Administrator if encountering permission errors.

### Debug Mode
Enable detailed logging:
```powershell
DEBUG=pw:api npm test
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style and patterns
- Add descriptive test case names and IDs
- Update documentation for new features
- Ensure all tests pass before submitting

## 📄 License

This project is licensed under the ISC License - see the package.json file for details.

## 🔗 Related Links

- [Playwright Documentation](https://playwright.dev/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [Swift Translator Application](#) *(Add actual application link when available)*

---


