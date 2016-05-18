/**
 * Created by nick on 5/17/16.
 */

const webpack = require('webpack');

module.exports = {
    entry : [ __dirname + '/src/client/app/app.js'],
    output: {
        filename: 'bundle.js',
        path    : __dirname + '/src/client/bundle',
        publicPath: '/bundle/'
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    //devtool: 'source-map',

    module : {
        // preLoaders: [
        //     {
        //         test: /\.js$/, // include .js files
        //         exclude: /node_modules/, // exclude any and all files in the node_modules folder
        //         loader: "jshint-loader"
        //     }
        // ],
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: 'file-loader?name=[name].[ext]'},
            {
                test   : /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader : 'babel-loader',
                query  : {
                    presets: ['es2015']
                }
            }
        ]
    },
    jshint : {
        // any jshint option http://www.jshint.com/docs/options/
        // i. e.
        camelcase: false,

        quotmark: 'single',

        // jshint errors are displayed by default as warnings
        // set emitErrors to true to display them as errors
        emitErrors: false,

        // jshint to not interrupt the compilation
        // if you want any file with jshint errors to fail
        // set failOnHint to true
        failOnHint: false,

        esversion: 6

        // custom reporter function
        //reporter: function(errors) { }
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false,
        //        drop_console: true,
        //        unsafe: true
        //    },
        //    mangle: {
        //        except: ['angular', '$', 'exports', 'require']
        //    }
        //})
    ]
};