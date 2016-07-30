exports.config = {
  specs: [
    './**/*.feature'
  ],

  baseUrl: 'https://weather.com',

  // set to "custom" instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    require: [
      'support/*.js',
      'features/step_definitions/*.js'
    ],
    format: 'pretty' // or summary
  },
  plugin: {
    skipAngularStability: true
  },
  directConnect: true

};