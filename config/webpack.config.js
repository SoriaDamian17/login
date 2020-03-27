const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => {
    return {
        mode: 'development',
        output: {
            filename: 'app.bundle.js',
            path: path.join(__dirname, "../dist"),
        },
        devtool: 'inline-source-map',
        devServer: {
            hot: true,
            port: 3000,
            historyApiFallback: true,
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendor",
                        chunks: "all"
                    }
                }
            },
            minimize: false,
            minimizer: [
                new TerserPlugin()
            ],
        },
        resolve: {
            alias: {
                '@public': path.resolve(__dirname, 'public'),
                '@src': path.resolve(__dirname, 'src'),
                '@styles': path.resolve(__dirname, 'src/styles')
            }
        },
        plugins: [
            new BundleAnalyzerPlugin({ 
                analyzerMode: env.ANALYZER, // server | static | disabled
                analyzerPort: 7777
            }),
            new HtmlWebpackPlugin({
                template: 'public/index.html',
                minify: false
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].css',
                chunkFilename: '[id].css',
                ignoreOrder: false, // Enable to remove warnings about conflicting order
            }),
            new webpack.DllReferencePlugin({
                context: path.resolve(__dirname, '../dll/'),
                manifest: require('../dll/modules-manifest.json')
            })
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                },
                {
                    test: /\.(scss|sass)$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ],
                },
                {
                    test: /\.(jpg|png|gif|svg)$/,
                    use: {
                            loader: 'url-loader',
                            options: {
                            limit: 10000,
                            fallback: 'file-loader',
                            name: 'images/[name].[hash].[ext]',
                        }
                    }
                },
            ]
        }
    }
};