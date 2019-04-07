/* eslint no-console: off */
const fs = require('fs');
const rimraf = require('rimraf');
const packageJson = require('../../package.json');
const execSync = require('child_process').execSync;
// const registry = 'https://artifactory.srv.east.com.au/artifactory/api/npm/wdp-001_npm';

const createPackageJsonForPublish = pjson => {
  return {
    name: pjson.name,
    version: pjson.version,
  };
};

const execCommand = command => {
  execSync(command, { stdio: 'inherit' }, (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    if (error) {
      console.log(`exec ${command} error: ${error}`);
    }
  });
};
rimraf('./build/', err => {
  if (err) {
    console.log(err);
  }
});

execCommand('npm start build');
execCommand('npm version patch');
fs.writeFileSync(
  './build/package.json',
  JSON.stringify(createPackageJsonForPublish(packageJson))
);
// execCommand(`npm publish --registry ${registry}`);
execCommand(`npm publish`);
