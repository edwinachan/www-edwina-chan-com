module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: ['./src/app'],
    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            }
        ]
    }
};