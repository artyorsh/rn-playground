module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'tsconfig-paths-module-resolver',
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
