module.exports = {
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx', '.json', '.js', 'jsx'],
        root: ['./src/'],
        alias: {
          '@api': './src/api',
          '@i18n': './src/i18n',
          '@images': './src/images',
          '@models': './src/models',
          '@modules': './src/modules',
          '@shared': './src/shared',
          '@stores': './src/stores',
          '@utils': './src/utils',
        },
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
