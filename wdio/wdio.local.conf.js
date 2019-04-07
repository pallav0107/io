const VisualRegressionCompare = require("wdio-visual-regression-service/compare");
const helper = require("./wdio.helper");
const settings = require("./wdio.settings");
const baseConfig = require('./wdio.base.conf');

exports.config = Object.assign({}, baseConfig.config, {
  maxInstances: 1,

  baseUrl: settings.config.local.baseUrl,

  capabilities: [
    {
      maxInstances: 1,
      browserName: helper.getBrowserName()
    }
  ],

  visualRegression: {
    compare: new VisualRegressionCompare.LocalCompare({
      referenceName: helper.getScreenshotName(
        settings.config.local.e2eImageFolderRef
      ),
      screenshotName: helper.getScreenshotName(
        settings.config.local.e2eImageFolderScreen
      ),
      diffName: helper.getScreenshotName(
        settings.config.local.e2eImageFolderDiff
      )
    })
  },

  services: ["visual-regression", "selenium-standalone"]
});
