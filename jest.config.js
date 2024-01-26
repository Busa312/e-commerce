module.exports = {
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
  collectCoverage: true,
  collectCoverageFrom: ["./src/app/**"],
  coverageThreshold: {
    global: {
      branches: 75
    },
  }
};
