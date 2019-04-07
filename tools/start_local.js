const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const projectRoot = process.cwd();
const glob = require('glob');

const envFolder = path.join(projectRoot, './env');
const defaultFolder = path.join(envFolder, 'default');
const localFolder = path.join(envFolder, 'local');
const publicFolder = path.join(projectRoot, 'public');

const copyFolder = (src, target) => {
  return new Promise((resolve, reject) => {
    fse.copy(src, target, { overwrite: true }, err => {
      if (err) {
        console.error(`copyFolder error : ${err}`);
        reject(err);
      }
      resolve();
    });
  });
};

const copyConfig = (defaultFolder, localFolder, targetFolder) => {
  return new Promise((resolve, reject) => {
    // Clean up target folder (public/env folder under packages)
    fse.remove(targetFolder, err => {
      if (err) {
        console.error(`Failed to remove target folder : ${targetFolder}`);
        reject(err);
      }
      fse.mkdirp(targetFolder, err => {
        if (err) {
          console.error(`Failed to create folder : ${targetFolder}`);
          reject(err);
        }
        // Make sure we copy default first then overwritten by local
        copyFolder(defaultFolder, targetFolder).then(() => {
          copyFolder(localFolder, targetFolder).then(resolve, reject);
        }, reject);
      });
    });
  });
};

const copyFont = targetFolder => {
  const fontFolder = path.join(
    __dirname,
    '../node_modules/@wdpui/common-dev-assets/static'
  );
  return new Promise((resolve, reject) => {
    fs.exists(fontFolder, exists => {
      if (!exists) {
        reject(`Font folder does not exist : ${fontFolder}`);
      }
      fse.copy(fontFolder, targetFolder).then(resolve, reject);
    });
  });
};

const createLocalFiles = () => {
  return new Promise((resolve, reject) => {
    copyConfig(defaultFolder, localFolder, path.join(publicFolder, 'env'));
    copyFont(path.join(publicFolder, 'static'));
  });
};

createLocalFiles().then(
  () => {
    console.log('createLocalFiles Success');
  },
  err => {
    console.error(err);
  }
);
