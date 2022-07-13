// webpack is ultimately read by node.js so we need
// module.exports 

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts', // entry point for webpack, 
    // the first file it looks at and compiles, but it will compile and import dependencies
    // first file in the tree.
    module: {
        rules: [ 
            { // rule to transpile typescipt into javascript
                test: /\.ts$/, //needs to pass test to transpile (checks if it is typescipt file) $ checks if .ts is at the end of the file
                use: 'ts-loader', // typescript transpiler
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')] // only use files from source folder
            },
            {
                test:/\.scss$/, // regex for scss
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // absolute path, not relative, this goes to __dirname = webpack.config.js, then goes to dist folder
        clean: true,
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000, 
        open: true, // opens it automatically
        hot: true,
        compress: true, 
        historyApiFallback: true, 
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Primer',
            filename: 'index.html',
            template: 'src/template.html', // template for html generation
        }),
    ],
}