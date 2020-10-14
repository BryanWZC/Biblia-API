const path = require('path');

module.exports = {
    target: 'web',
    mode: 'production',
    entry: './components/index.js',
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_component)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env']}
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    }
}