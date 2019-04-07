let browsersSetup = require("./wdio.browsers.setup");
const path = require("path");
const helper = require("./wdio.helper");
const specsMerge = require("../utils/e2e-support/specs-merge");

exports.config = {
  seleniumArgs: browsersSetup,
  seleniumInstallArgs: browsersSetup,

  specs: ["./src/layouts/**/*.e2e.js"],
  exclude: [],
  sync: true,
  logLevel: 'verbose',
  coloredLogs: true,
  waitforTimeout: 30000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: "mocha",
  reporters: ['spec'],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
    compilers: ["js:babel-register"]
  }
};