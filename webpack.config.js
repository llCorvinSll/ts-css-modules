"use strict";
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const JsonpVisionTemplatePlugin = require('./webpack_plugins/dist/JsonpVisionTemplatePlugin');
const TestPlugin = require('./plugins/dist/TestPlugin');
const argv = require('yargs').argv;

let mode = "development";
const performance = {
    hints: false,
    maxEntrypointSize: 2000000,
    maxAssetSize: 2000000,
};


if (argv.production) {
    performance.hints = "warning";
    mode = "production";
}


module.exports = {
    mode,
    target: 'web',
    devtool: 'inline-source-map',
    entry: './demo/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './demo/dist'),
        strictModuleExceptionHandling: true
    },

    resolveLoader: {
        alias: {
            "css-module-type-loader": path.join(__dirname, "./plugins/dist/FindStyleLoader"),
        }
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "vision/_build"),
                    path.resolve(__dirname, "tests_selenium"),
                    path.resolve(__dirname, "tools"),
                ],
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: false,
                            onlyCompileBundledFiles: true,
                            configFile: require.resolve("./tsconfig.json")
                        }
                    },
                    {
                        loader: 'css-module-type-loader',
                    }
                ]
            },
            // {
            //     test: /\.styl$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: ["css-loader?modules&namedExport&importLoaders=1&localIdentName=_[hash:base64:6]!stylus-loader"]
            //     })
            // }
        ]
    },

    watchOptions: {
        poll: 500,
        ignored: /node_modules/
    },

    performance,

    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ]
    },

    plugins: [
        new TestPlugin()
    ]
};