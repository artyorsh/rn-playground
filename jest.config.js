const esModules = [
  'react-native',
  '@react-native',
  '@react-navigation',
];

module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [`node_modules/(?!${esModules.join('|')})`],
  testMatch: [
    '<rootDir>/src/**/*.spec.(ts|tsx)',
  ],
};
