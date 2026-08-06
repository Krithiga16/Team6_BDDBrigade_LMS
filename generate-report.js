const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'reports',
    reportPath: 'reports/html',
    metadata: {
        browser: { name: process.env.BROWSER || 'chromium', version: 'latest' },
        device: 'Local test machine',
        platform: { name: 'windows', version: '10' },
    },
    customData: {
        title: 'Run info',
        data: [
            { label: 'Project', value: 'Team6 BDDBrigade LMS' },
            { label: 'Release', value: '1.0.0' },
            { label: 'Execution Start Time', value: new Date().toISOString() },
        ],
    },
});