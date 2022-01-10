module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          constant: './src/constant',
          navigation: './src/navigation',
          screens: './src/screens',
          '@types': './src/screens',
        },
        extensions: ['.js', '.ts', '.tsx'],
        root: ['./'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
  presets: ['module:metro-react-native-babel-preset'],
};