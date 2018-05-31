const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        one: 'src/apps/app.one.js',
        two: 'src/apps/app.two.js',
        three: 'src/apps/app.three.js'
    },
    output: {
        path: __dirname + '/dist/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    resolve: {
        modules: [
            './',
            'node_modules'
        ]
    },
    module: {
        rules: [
            { test: /\.html$/, use: [ 'html-loader' ]}
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'webpack-bundle-analyzer.html',
            generateStatsFile: true,
            statsFilename: 'stats.json',
            openAnalyzer: false
        })
    ]
}