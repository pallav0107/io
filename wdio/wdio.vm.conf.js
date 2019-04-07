const VisualRegressionCompare = require("wdio-visual-regression-service/compare");
const helper = require("./wdio.helper");
const settings = require("./wdio.settings");
const baseConfig = require('./wdio.base.conf');
console.log(`host : ${settings.config.vm.host}`);
console.log(`port : ${settings.config.vm.port}`);
exports.config = Object.assign({}, baseConfig.config, {
  maxInstances: 1,

  host: settings.config.vm.host,
  port: settings.config.vm.port,
  baseUrl: settings.config.vm.baseUrl,

  capabilities: [
    {
      maxInstances: 1,
      browserName: helper.getBrowserName()
    }
  ],

  visualRegression: {
    compare: new VisualRegressionCompare.LocalCompare({
      referenceName: helper.getScreenshotName(
        settings.config.vm.e2eImageFolderRef
      ),
      screenshotName: helper.getScreenshotName(
        settings.config.vm.e2eImageFolderScreen
      ),
      diffName: helper.getScreenshotName(
        settings.config.vm.e2eImageFolderDiff
      )
    })
  },

  services: ["visual-regression", "selenium-standalone"]
});
