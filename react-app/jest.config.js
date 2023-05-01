module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/node_modules"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setupJest.js"],
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.tsx",
    "<rootDir>/src/pages/*.tsx",
    "<rootDir>/src/services/**/*.ts",
  ],
};
