/* eslint no-console: off */

const exec = require('child_process').exec;
const argv = require('yargs').argv;
const fs = require('fs');
const path = require('path');

let componentName = argv.component;

try {
  fs.unlinkSync(`packages/${componentName}/dist`);
} catch (e) {
  // swallow
}

const watchMode = argv.w || argv.watch;

if (!componentName) {
  const componentFromPath = process.cwd().match(/packages(?:\/|\\)(.*?)(?:(?:\/|\\)|$)/);

  if (!componentFromPath) {
    console.error(
      'No component name provided, specify with --component <name> or call build from component folder',
    );
    process.exit(1);
  } else {
    componentName = componentFromPath[1];
  }
}

console.log(`Compiling component ${componentName} ${watchMode ? 'and watching' : ''}`);

const projectRoot = path.resolve(`${__dirname}/../`);

const rollupCommand = `npm start "compile.component --component \\"${componentName}\\""`;
const rollup = exec(rollupCommand, { cwd: projectRoot });
rollup.stdout.pipe(process.stdout);
rollup.stderr.pipe(process.stderr);
rollup.on('exit', code => process.exit(code));
