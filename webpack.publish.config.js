var path = require('path')

module.exports = {
    entry:path.resolve(__dirname,'src/app.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                text:/\.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                loader:'babel',
                query:{
                    presets:['es2015','react']
                }
            }
        ]
    }
}