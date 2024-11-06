const path = require('node:path');

module.exports = {
    entry: './src/teamGenerator.js',
    output: { path: path.resolve(__dirname, 'dist'), },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader', },
            },
        ],
    },
};