// webpack is ultimately read by node.js so we need
// module.exports 

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts', // entry point for webpack, 
    // the first file it looks at and compiles, but it will compile and import dependencies
    // first file in the tree.
    module: {
        rules: [ // rule to transpile typescipt into javascript
            {
                test: /\.ts$/, //needs to pass test to transpile (checks if it is typescipt file) $ checks if .ts is at the end of the file
                use: 'ts-loader', // typescript transpiler
                include: [path.resolve(__dirname, 'src')] // only use files from source folder
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // absolute path, not relative, this goes to __dirname = webpack.config.js, then goes to dist folder
    },
    resolve: {
        extensions: ['.ts', '.js'],
    }
}