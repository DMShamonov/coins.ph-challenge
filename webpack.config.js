/* eslint-disable import/no-dynamic-require, global-require */

module.exports = (options = {}) => {
  const { build } = options;
  const ENVIRONMENT = build || 'development';
  const IS_DEVELOPMENT_MODE = ENVIRONMENT === 'development';

  return require('./configs/webpack/webpack.config.js')({
    ...options,
    ENVIRONMENT,
    IS_DEVELOPMENT_MODE,
  });
};
