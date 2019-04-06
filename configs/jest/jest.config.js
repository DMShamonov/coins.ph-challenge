module.exports = {
  verbose: true,
  rootDir: '../..',
  roots: [
    '<rootDir>/app',
    '<rootDir>/app/src',
  ],
  setupFiles: [
    '<rootDir>/configs/jest/jest.setup.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
};
