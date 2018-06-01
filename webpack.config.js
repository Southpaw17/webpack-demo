const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        one: 'src/apps/app.one.js',
        two: 'src/apps/app.two.js',
        three: 'src/apps/app.three.js'
    },
    devtool: 'source-map',
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
        // Create a simple common bundle to extract shared code
        // This current setup uses a 'shared-by-every' strategy
        // For more information on the different strategies, see
        // https://engconf.int.kronos.com/display/FT/Webpack
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            // minChunks: 2     // Uncommenting this will switch to a 'shared-by-any' strategy
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'webpack-bundle-analyzer.html',
            generateStatsFile: true,
            statsFilename: 'stats.json',
            openAnalyzer: false
        })
    ]
}