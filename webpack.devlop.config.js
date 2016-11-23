var path = require('path')

module.exports = {
    entry:[
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname,'src/app.js')
    ],
    //entry:path.reslove(__dirname,'src/app.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                loader:'babel',
                query:{
                    presets:['es2015','react']
                }
            },{
                test: /\.css$/, // Only .css files
                exclude: /(node_modules|bower_components)/,
                loader: 'style!css' // Run both loaders
            }
        ]
    }
}