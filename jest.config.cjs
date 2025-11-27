// jest.config.js
module.exports = {
  testEnvironment: 'node',  // Gebruik Node.js omgeving voor file system tests
  collectCoverage: true,    // Genereer coverage rapporten
  coverageDirectory: 'coverage',  // Waar coverage rapporten opslaan
  coverageReporters: ['text', 'lcov', 'html'],  // Meerdere rapport formaten
  coverageThreshold: {
    global: {
      branches: 80,      // 80% branch coverage
      functions: 80,     // 80% function coverage
      lines: 80,         // 80% line coverage
      statements: 80     // 80% statement coverage
    }
  },
  testMatch: ['**/tests/**/*.test.cjs'],  // Test bestand patroon
  testTimeout: 10000,  // 10 seconde timeout voor tests
  verbose: true  // Toon gedetailleerde test output
};