const fs = require("fs");
const { execSync } = require("child_process");
const packageJsonName = "package.json";
const packageJson = require(`../../${packageJsonName}`);

const origArgv = JSON.parse(process.env.npm_config_argv);

const isLocalInstall =
  origArgv &&
  origArgv.original &&
  origArgv.original.some((elem, idx, arr) => {
    return elem.toLowerCase() === "--local";
  });
  
if (!isLocalInstall) {
  console.log("Skip localDependencies install");
  process.exit(0);
}

if (!packageJson || !fs.existsSync(packageJsonName)) {
  console.error("Please run npm install under project root");
  process.exit(1);
}

if (!packageJson.localDependencies) {
  console.log("No localDependencies packages to install, exit now ... ...");
  process.exit(0);
}
Object.keys(packageJson.localDependencies).forEach(localDep => {
  console.log(
    `postinstall: running npm install --ignore-scripts --no-save ${localDep}@${packageJson
      .localDependencies[localDep]}`
  );
  execSync(
    `npm install --ignore-scripts --no-save ${localDep}@${packageJson
      .localDependencies[localDep]}`,
    { stdio: "inherit" },
    (error, stdout, stderr) => {
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
      if (error) {
        console.log(`exec ${command} error: ${error}`);
      }
    }
  );
}, this);

console.log("postinstall: process completed");
