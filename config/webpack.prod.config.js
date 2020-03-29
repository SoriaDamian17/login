const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
    return {
        mode: 'production',
        output: {
            filename: 'js/app.bundle.js',
            publicPath: '/'
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
            minimize: true,
            minimizer: [
                new TerserPlugin()
            ],
        },
        resolve: {
            alias: {
                '@public': path.resolve(__dirname, 'public'),
                '@src': path.resolve(__dirname, 'src'),
                '@styles': path.resolve(__dirname, 'src/styles')
            },
        },
        plugins: [
            new BundleAnalyzerPlugin({ 
            analyzerMode: env.ANALYZER, // server | static | disabled
            analyzerPort: 7777
            }),
            new HtmlWebpackPlugin({
                template: 'public/index.html',
                minify: true
            }),
            new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
            }),
            new CompressionPlugin({
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: /\.(js|scss|css|html|svg)$/,
                threshold: 10240,
                minRatio: 0.8
            }),
            new BrotliPlugin({ //brotli plugin
                asset: '[path].br[query]',
                test: /\.(js|scss|css|html|svg)$/,
                threshold: 10240,
                minRatio: 0.8
            }),
            new webpack.optimize.AggressiveMergingPlugin({
                minSizeReduce: 1.5
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
                        MiniCssExtractPlugin.loader,
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
    };
}