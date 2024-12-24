module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-jasmine-html-reporter',
        'karma-coverage'
      ],
      client: {
        clearContext: false
      },
      coverageReporter: {
        dir: require('path').join(__dirname, './coverage/your-app-name'),
        subdir: '.',
        reporters: [
          { type: 'html' }, // HTML report
          { type: 'lcov' }, // LCOV format for coverage
          { type: 'text-summary' } // Text summary for console output
        ]
      },
      reporters: ['progress', 'kjhtml', 'coverage'], // Reporters for testing
      browsers: ['Chrome'], // Chrome browser for running tests
      angularCli: {
        environment: 'dev'
      },
      singleRun: false, // Keep browser open after tests
      restartOnFileChange: true
    });
  };
  