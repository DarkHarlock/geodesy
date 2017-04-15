// Karma configuration
// Generated on Fri Apr 14 2017 23:40:48 GMT+0200 (W. Europe Summer Time)

/* eslint-disable strict */
module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [ 'mocha' ],


        // list of files / patterns to load in the browser
        files: [
            { pattern: 'node_modules/chai/chai.js', included: true },
            { pattern: 'dms.js', included: true },
            { pattern: 'vector3d.js', included: true },
            { pattern: 'latlon-spherical.js', included: true },
            { pattern: 'latlon-ellipsoidal.js', included: true },
            { pattern: 'latlon-vincenty.js', included: true },
            { pattern: 'utm.js', included: true },
            { pattern: 'osgridref.js', included: true },
            { pattern: 'test/**/*-tests.html.js', included: true },
        ],


        // list of files to exclude
        exclude: [
            // 'npm.js',
            // 'test-main.js',
            // 'karma.*.js',
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: [ 'progress' ],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [ 'Chrome' ],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
    });
};
