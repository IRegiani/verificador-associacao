// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx}'],
  coverageDirectory: '../coverage',
  coverageReporters: [
    'text',
    'lcov',
    'clover',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  rootDir: '../src',
  // setupFiles: ['./jest.setup.js'],
  // runner: ?
  // A path to a module which exports an async function that is triggered once before all test suites
  // globalSetup: undefined,

  // A set of global variables that need to be available in all test environments
  // globals: {},

  maxWorkers: '80%',
  // snapshotSerializers: [],
  notify: true,
  notifyMode: 'failure',
  resetMocks: true,
  runner: 'jest-runner',
  verbose: true,
};
