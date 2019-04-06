/* eslint-disable import/no-extraneous-dependencies */

const postCSSCustomProperties = require('postcss-custom-properties');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    postCSSCustomProperties(),
    autoprefixer(),
    cssnano({
      preset: 'default',
      comments: {
        removeAll: true,
      },
    }),
  ],
};
