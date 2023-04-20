module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setupJest.js']
}
