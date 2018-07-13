module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        targets: {
          browsers: ['>0.25%', 'not ie 11', 'not op_mini all'],
        },
      },
    ],
    '@babel/react',
    [
      '@babel/stage-2',
      {
        decoratorsLegacy: true,
      },
    ],
  ],
};
