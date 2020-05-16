'use strict';

const { green } = require('chalk');
// eslint-disable-next-line node/no-extraneous-require
const strapiAdmin = require('strapi-admin');
const { getConfigUrls } = require('strapi-utils');

const loadConfiguration = require('../core/app-configuration');
const addSlash = require('../utils/addSlash');
/**
 * `$ strapi build`
 */
module.exports = async ({ clean, optimization, dirPath }) => {
  const root = process.cwd();
  const dir = dirPath ? root + '/' + dirPath : root;
  const config = loadConfiguration(dir, undefined, root);

  const { serverUrl, adminPath } = getConfigUrls(config.get('server'), true);

  console.log(`Building your admin UI with ${green(config.environment)} configuration ...`);

  if (clean) {
    await strapiAdmin.clean({ dir });
  }

  return strapiAdmin
    .build({
      dir,
      root,
      // front end build env is always production for now
      env: 'production',
      optimize: optimization,
      options: {
        backend: serverUrl,
        publicPath: addSlash(adminPath),
      },
    })
    .then(() => {
      process.exit();
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
};
