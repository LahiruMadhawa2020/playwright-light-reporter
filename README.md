# playwright-light-reporter (demo)

Public demo project for the [`playwright-light-reporter`](https://www.npmjs.com/package/playwright-light-reporter) npm package.

It runs sample Playwright tests and generates **two** HTML reports in one run:

| Folder | Reporter export | Description |
|--------|-----------------|-------------|
| `reports/standard` | `playwright-light-reporter/standard` | Drill-down UI with nested steps |
| `reports/bdd` | `playwright-light-reporter/bdd` | Feature → scenario → steps, `REQ_` / `TEST_` tiles |

## Live demos

Sample reports (pass + fail) are published to GitHub Pages on each push to `master`:

- [Standard report](https://lahirumadhawa2020.github.io/playwright-light-reporter/standard/index.html)
- [BDD report](https://lahirumadhawa2020.github.io/playwright-light-reporter/bdd/index.html)

Enable **Settings → Pages → Build and deployment → GitHub Actions** on the repo if the links are not live yet.

## Prerequisites

- Node.js 20+
- Install the published package (after `npm publish` from the private `playwright-runner-light-reporter` source tree):

```bash
npm install --save-dev playwright-light-reporter @playwright/test
```

For local development before publish, use `npm install --save-dev file:../../cursor-publishes/playwright-runner-light-reporter` in this folder.

## Push to GitHub

This demo targets [LahiruMadhawa2020/playwright-light-reporter](https://github.com/LahiruMadhawa2020/playwright-light-reporter). Sign in with that account (`gh auth login`) before `git push -u origin master`. If the remote still uses `main`, set **default branch** to `master` in GitHub repo settings after the first push.

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
