const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        modules: [
        'react',
        'react-dom'
        ]
    },
    mode: 'production',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dll'),
        library: '[name]',
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '../dll/[name]-manifest.json'),
            name: '[name]',
            context: path.resolve(__dirname, "src", "app")
        })
    ],
}