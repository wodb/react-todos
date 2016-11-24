var path = require('path')
var webpack = require('webpack')

module.exports = {
    //entry:path.resolve(__dirname,'src/app.js'),
    entry:{
      app:path.resolve(__dirname,'src/app.js'),
        vendors:['react','react-dom']
    },
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
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin('vendors','vendors.js')
    ]
}