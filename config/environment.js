'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'tailwindcss-demo',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      GOOGLE_API_KEY: String,
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.GOOGLE_API_KEY = 'AIzaSyAcXHD2gWgjpCyFgR-rdiDKxuB-dDRzBaA';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
    ENV.APP.GOOGLE_API_KEY = 'AIzaSyAcXHD2gWgjpCyFgR-rdiDKxuB-dDRzBaA';
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.APP.GOOGLE_API_KEY = 'AIzaSyAcXHD2gWgjpCyFgR-rdiDKxuB-dDRzBaA';
  }
  ENV['ember-google-maps'] = {
    key: 'AIzaSyAcXHD2gWgjpCyFgR-rdiDKxuB-dDRzBaA',
  };
  return ENV;
};
