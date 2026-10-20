# playwright-light-reporter (demo)

Public demo project for the [`playwright-light-reporter`](https://www.npmjs.com/package/playwright-light-reporter) npm package.

It runs sample Playwright tests and generates **two** HTML reports in one run:

| Folder | Reporter export | Description |
|--------|-----------------|-------------|
| `reports/standard` | `playwright-light-reporter/standard` | Drill-down UI with nested steps |
| `reports/bdd` | `playwright-light-reporter/bdd` | Feature → scenario → steps, `REQ_` / `TEST_` tiles |

## Prerequisites

- Node.js 20+
- Built local package at `../../cursor-publishes/playwright-runner-light-reporter` (private source), **or** install from npm once published:

```bash
npm install --save-dev playwright-light-reporter
```

## Run tests

```bash
npm install
npx playwright install chromium
npm test
```

Open `reports/standard/index.html` and `reports/bdd/index.html` after the run.

## Configure in your project

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['playwright-light-reporter/standard', { outputDir: 'reports/standard' }],
    ['playwright-light-reporter/bdd', { outputDir: 'reports/bdd' }],
  ],
});
```

See the package README for BDD linking (`REQ_<Jira-key>`, `TEST_<case-id>`) and Jenkins / Allure-related references.

## License

MIT
