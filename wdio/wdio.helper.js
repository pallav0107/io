const path = require('path');

exports.getScreenshotName = screenshotType => {
  return context => {
    const testFileDir = path.dirname(global.currentTest);
    const type = context.type;
    const testName = `${context.test.parent} ${context.test.title}`;
    const browserVersion = parseInt(context.browser.version, 10);
    let platform = context.desiredCapabilities.platform;
    let browserName = context.browser.name;
    if (platform) {
      browserName += `_${platform}`;
    }
    return path.join(
      testFileDir,
      'e2e',
      '__screenshots__',
      screenshotType,
      `${testName}_${type}_${browserVersion}_${browserName}.png`
    );
  };
};

exports.getBrowserName = () => {
  // Valid value for browser Name
  // https://www.browserstack.com/automate/capabilities
  // firefox, chrome, internet explorer, safari, opera, edge, iPad, iPhone, android
  if (process.env.BROWSER_NAME) {
    return process.env.BROWSER_NAME.toLowerCase();
  }
  return 'chrome';
};
