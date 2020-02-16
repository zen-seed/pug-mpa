const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const glob = require('glob');

/**
 * 提取 root
 * @param String root 路径
 * @param Object pattern 路径匹配条件
 * @param regexp chunkNamePattern 提取 chunkName 的模式
 */
const PATTERN = path.join(__dirname, '../src/page-*/index.js');
const CHUNK_PATTERN = /(?<=page-)([\w\d-_]+(?=[/]))()/; // 默认提取 page- 之后的名字
exports.creatEntries = function(
    pattern = PATTERN,
    options = {},
    chunkNamePattern = CHUNK_PATTERN
) {
    let files = glob.sync(pattern, options);
    let entry = {};
    files.forEach(file => {
        let entryPath = path.resolve(file);
        let chunkName = chunkNamePattern.exec(entryPath)[0];
        entry[chunkName] = entryPath;
    });
    return entry;
};

/**
 *
 */
exports.createMultiPage = function(entries, options = {}) {
    let pages = [];
    for (let chunkName in entries) {
        pages.push(
            new HtmlWebpackPlugin({
                title: chunkName,
                filename: `${chunkName}.html`,
                template: entries[chunkName].replace('.js', '.pug'),
                chunks: [chunkName],
                minify: true
            })
        );
    }
    return pages;
};
