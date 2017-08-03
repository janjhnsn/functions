const   webpack = require('webpack')
,       PROD = false; //JSON.parse(process.env.PROD_ENV || '0')
;

module.exports = {
    devtool: PROD ? '' : 'inline-source-map',
    entry: '.\\scripts\\app',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        loaders: [ // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { 
                test: /\.tsx?$/, 
                loader: 'ts-loader'
            }
        ]
    },
    plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.js$/,
            compress: true,
            mangle: {
                props: {
                    reserved: require('uglify-js/tools/domprops.json').props,
                }
            }
        })
    ] : []
}