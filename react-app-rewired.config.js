const { addWebpackModuleRule, override } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.json$/,
    loader: 'json-loader',
  }),
);