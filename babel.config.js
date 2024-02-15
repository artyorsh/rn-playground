module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // Support TS `experimenatlDecorators`
    // https://github.com/leonardfactory/babel-plugin-transform-typescript-metadata#usage
    // https://github.com/tc39/proposal-decorators#comparison-with-typescript-experimental-decorators
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { version: 'legacy' }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
