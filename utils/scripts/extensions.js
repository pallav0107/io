import { basename, dirname, isAbsolute, resolve } from 'path';
import * as fs from 'fs';

function isFile(file) {
  try {
    return fs.statSync(file).isFile();
  } catch (err) {
    return false;
  }
}

function addExtensionIfNecessary(file, extensionSettings) {
  try {
    const name = basename(file);
    const files = fs.readdirSync(dirname(file));

    if (files.indexOf(name) !== -1 && isFile(file)) return file;

    let validExt = '';
    if (
      extensionSettings.some((ext) => {
        validExt = ext;
        return files.indexOf(`${name}${ext}`) !== -1 && isFile(`${file}${ext}`);
      })
    ) {
      return `${file}${validExt}`;
    }
  } catch (err) {
    // noop
  }

  return null;
}

export default function extensions(extensionSettings) {
  if (!extensionSettings || !extensionSettings.length) {
    throw new Error('Must specify { extensions: [..] } as non-empty array!');
  }

  return {
    name: 'extensions',

    resolveId(importee, importer) {
      // absolute paths are left untouched
      if (isAbsolute(importee)) {
        return addExtensionIfNecessary(resolve(importee), extensionSettings);
      }

      // if this is the entry point, resolve against cwd
      if (importer === undefined) {
        return addExtensionIfNecessary(resolve(process.cwd(), importee), extensionSettings);
      }

      // external modules are skipped at this stage
      if (importee[0] !== '.') return null;

      return addExtensionIfNecessary(resolve(dirname(importer), importee), extensionSettings);
    },
  };
}
