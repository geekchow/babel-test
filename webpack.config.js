var path = require('path');

module.exports= {
    entry: path.resolve(__dirname, 'src/index.js'),
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    module: {
        loaders:[
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, 'src')],
                loader: 'babel',
            }
        ]
    }
}