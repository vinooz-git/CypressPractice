const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json',
	reportPath: './cypress/results/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '92'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'MC Demo'},
            {label: 'Release', value: '1.2.1'},
        ]
    }
});