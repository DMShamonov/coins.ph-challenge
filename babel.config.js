module.exports = {
  sourceType: 'unambiguous',
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread'],
    ['@babel/plugin-syntax-dynamic-import'],
    ['@babel/plugin-proposal-optional-chaining'],
    ['babel-plugin-module-resolver', { root: ['./app', './app/src'] }],
  ],
  presets: [
    ['@babel/preset-env', {
      modules: false,
      corejs: 2,
      useBuiltIns: 'entry',
    }],
    ['@babel/preset-react'],
    ['@babel/preset-flow'],
  ],
  env: {
    development: {
      plugins: [
        ['react-hot-loader/babel'],
      ],
    },
    test: {
      presets: [
        ['@babel/preset-env', {
          corejs: 2,
          useBuiltIns: 'usage',
        }],
      ],
    },
  },
};
