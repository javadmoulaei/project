const path = require('path')



module.exports = {
    entry : "./src/js.js",
    output : {
        path : path.resolve(__dirname,'./Public'),
        filename : 'bundle.js'
    }
}