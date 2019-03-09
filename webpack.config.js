const path = require('path');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'chess.js',
        libraryTarget: 'umd'
    },
    module: {
rules:[
    {
        test:/.js$/,
        exclude: [
            path.resolve(__dirname, "node_modules")
        ],
        loader: 'babel-loader',
        options: ["preset-es2017"]

    }
    ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}