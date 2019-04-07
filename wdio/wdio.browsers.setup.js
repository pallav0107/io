module.exports = {
  baseURL: 'https://selenium-release.storage.googleapis.com',
  version: '3.5.2',
  drivers: {
      chrome: {
          version: '2.31',
          arch: process.arch,
          // - Recent versions of the driver: https://sites.google.com/a/chromium.org/chromedriver/
          baseURL: 'https://chromedriver.storage.googleapis.com'
      },
      ie: {
          version: '3.5.1',
          arch: 'ia32',
          // - Recent versions of the driver: http://selenium-release.storage.googleapis.com/index.html
          baseURL: 'https://selenium-release.storage.googleapis.com'
      },
      firefox: {
          version: '0.18.0',
          arch: process.arch,
          baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
      }
  }
};