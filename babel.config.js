module.exports = {
  presets: ['@babel/env', '@babel/react', '@babel/flow'],
  plugins: ['@babel/proposal-class-properties'],
  env: {
    esm: {
      presets: [['@babel/env', {modules: false}]],
    },
  },
};
