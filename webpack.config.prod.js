// process.env.NODE_ENV = 'production';
// import {moduleConfig} from './webpack.config'
const moduleConfig = require("./webpack.config");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');  //清理dist
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const CleanWebpackPlugin = process.env.NODE_ENV == 'production'?require('clean-webpack-plugin'):null;  //清理dist
// const UglifyJSPlugin = process.env.NODE_ENV == 'production'?require('uglifyjs-webpack-plugin'):null;
const theme = require('./package.json').theme;
const path = require('path');
// const webpack =require('webpack'); 
const version = "Version=" + new Date().getTime(); 
console.log('===生产模式===',process.env.NODE_ENV)
console.log('   生产时间===',version)
console.log('   生产时间===',JSON.stringify(moduleConfig));
module.exports = { 
    ...moduleConfig,
    // performance: { hints: false },
    // module: {
    //     rules: [
    //         {
    //             test: /\.jsx|\.js$/,
    //             exclude: /node_modules/,
    //             use: {
    //                 loader: "babel-loader",
    //             }
    //         },
    //         {
    //             test: /\.css$/,
    //             use: [
    //                 { loader: 'style-loader' },
    //                 { loader: 'css-loader?name=assets/css/[name].[ext]' }
    //             ]
    //         },
    //         {
    //             test: /\.less$/,
    //             use: [
    //                 'style-loader',
    //                 'css-loader',
    //                 { loader: 'less-loader', options: { modifyVars: theme } },
    //             ],
    //             include: /node_modules/,
    //         },
    //         // {
    //         //     test: /\.html$/,
    //         //     use: [
    //         //         {
    //         //             loader: "html-loader",
    //         //             options: { minimize: true }
    //         //         }
    //         //     ]
    //         // },
    //         {
    //             test: /\.(?:png|jpg|jpeg|gif|svg|bmp|eot|woff|woff2|ttf)$/,
    //             include: path.resolve(__dirname, 'assets/img'),
    //             use: [
    //                 {
    //                     loader: 'file-loader?name=assets/img/[name].[ext]' //打包后在img目录下
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // resolve: {
    //     extensions: [".js", ".json", ".jsx", ".scss", ".less"],
    //     modules: [path.resolve(__dirname, "."), "node_modules"],
    //     alias: {
    //         Assets: path.resolve(__dirname, 'assets/'),
    //         Option: path.resolve(__dirname, 'src/option'),
    //         Tools: path.resolve(__dirname, 'tools/'),
    //         Mock: path.resolve(__dirname, 'mock/'),
    //         Redux: path.resolve(__dirname, 'redux/'),
    //         FormShow: path.resolve(__dirname, 'src/views/formShow'),
    //     }
    // },
    mode: 'production',
    entry: {
        app: './src/App.jsx',
        // other: './other/App.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'+'?'+version,
        publicPath: "/",
        chunkFilename: '[name]_[chunkhash:8]_chunk.js',
    }, 
    plugins: [
        new CleanWebpackPlugin(),
        // new BundleAnalyzerPlugin(), 
        new HtmlWebPackPlugin({
            chunks: ['app'],
            template: "./src/index.html",
            title: "Index",
            filename: "index.html",
            script: '<script type="text/javascript" src="http://rescdn.qqmail.com/node/ww/wwopenmng/js/sso/wwLogin-1.0.0.js"></script>'
        }),
        // new UglifyJSPlugin({
        //     uglifyOptions: {compress: {
        //         warnings: false,
        //         drop_debugger: true,
        //         drop_console: true
        //       },
        //     },
        //       sourceMap: false 
        //   }),
    ],
};
 