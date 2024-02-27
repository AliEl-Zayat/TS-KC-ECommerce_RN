module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@screens': './src/screens',
          '@components': './src/components',
          '@icons': './src/assets/icons',
        },
      },
    ],
  ],
};
