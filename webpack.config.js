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
    plugins: [
        // Create a simple common bundle to extract shared code
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "common"
        // }),

        // Creating a dynamic Vendor Bundle which contains third party code
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor",
        //     minChunks: (module, count) => {
        //         return module.resource.indexOf("node_modules") !== -1
        //     }
        // }),


        // Extracting the Webpack Runtime into its own file
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "manifest",
        //     minChunks: Infinity
        // }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'webpack-bundle-analyzer.html',
            generateStatsFile: true,
            statsFilename: 'stats.json',
            openAnalyzer: false
        })
    ]
}