// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}', '!<rootDir>/src/index.jsx'],
  coverageDirectory: '<rootDir>/coverage',
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
  rootDir: '../',
  maxWorkers: '80%',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleDirectories: ['<rootDir>/node_modules'],
  setupFilesAfterEnv: ['<rootDir>/config/jest.setup.js'],
  notify: true,
  notifyMode: 'failure',
  resetMocks: true,
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
};
