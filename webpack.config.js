// entry point -> output
const path = require('path');


module.exports = {
    entry: './src/app.js',
    output:  {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, //checks if files getting loaded end with .js
            exclude: /node_modules/
        }]
    }
};

//loader