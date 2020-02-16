const merge = require('webpack-merge');
const commonConf = require('./config/webpack.common');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = ({ mode }) => {
    return {
        mode,
        ...merge(commonConf, require(`./config/webpack.${mode}`))
    };
};
