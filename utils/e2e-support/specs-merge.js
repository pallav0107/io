const path = require('path');
const fs = require('fs');
const glob = require('glob');

const generatedFileDir = 'generated';

if (!fs.existsSync(generatedFileDir)) {
  fs.mkdirSync(generatedFileDir);
}

module.exports = (specGlob) => {
  const specFiles = glob.sync(specGlob);

  let rootSpec = '';

  specFiles.forEach((filename) => {
    rootSpec += `describe('${path.dirname(
      filename,
    )}', () => { before(() => {global.currentTest = '${path.dirname(
      filename,
    )}'; }); require('${path.resolve(filename).replace(/\\/g, '\\\\')}') });\n`;
  });

  const rootSpecFilename = path.join(generatedFileDir, 'root-spec.js');

  fs.writeFileSync(rootSpecFilename, rootSpec);

  return path.resolve(rootSpecFilename);
};
