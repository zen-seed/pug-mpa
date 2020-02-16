const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devtool: 'source-map',
    devServer: {
        open: true,
        openPage: 'index.html',
        contentBase: path.resolve('dist')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        })
        /*    new MiniCssExtractPlugin({
            // 抽离css
            // filename: './css/index.css',
            filename: './css/[name].css',
            chunkFilename: './css/[id].css'
        }) */
    ]
};
