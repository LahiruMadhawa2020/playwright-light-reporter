import { defineConfig } from '@playwright/test';

const isListMode = process.argv.includes('--list');

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 0,
  reporter: isListMode
    ? [['list']]
    : [
        ['list'],
        [
          'playwright-light-reporter/standard',
          {
            outputDir: 'reports/standard',
            reportTitle: 'Playwright Light Reporter — Standard',
            reportSubtitle: 'Public demo (GitHub)',
            defaultEnvironment: 'demo',
            liveRefreshSeconds: 0,
          },
        ],
        [
          'playwright-light-reporter/bdd',
          {
            outputDir: 'reports/bdd',
            reportTitle: 'Playwright Light Reporter — BDD',
            reportSubtitle: 'Feature / scenario / step view',
            defaultEnvironment: 'demo',
            jiraIssueUrlTemplate: 'https://example.atlassian.net/browse/{id}',
            testCaseUrlTemplate: 'https://example.xray.com/browse/{id}',
            liveRefreshSeconds: 0,
          },
        ],
      ],
  use: {
    trace: 'on',
    screenshot: 'on',
    video: 'on',
  },
});
