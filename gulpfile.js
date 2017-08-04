'use strict';

const gulp = require('gulp')
,     gutil = require("gulp-util")
,     webpack = require("webpack")
,     webpackStream = require('webpack-stream')
,     through = require('through2')
,     webpackDevServer = require("webpack-dev-server");

const settings = {
    scriptDest: 'bin/'
};

var z = function(b, c, a, f){
    // Return string
    c="";

    // Shortcut for "String.fromCharCode"
    f = String.fromCharCode;

    // Loop on all the ASCII characters
    for(a = 0; b.length > a; a += 2) {
        // Append an UTF-16 (two surrogates) to the return string
        c += f(0xD800 + b.charCodeAt(a)) + f(0xDC00 + b.charCodeAt(a + 1));
        //c += f(55296 + b.charCodeAt(a)) + f(56320 + b.charCodeAt(a + 1));
        //c += f(55296+b[e="charCodeAt"](a)) + f(56320+b[e](a+1));
    }

    // Return
    return "eval(unescape(escape('" + c + "').replace(/u../g,'')))"
}

// TASK: Build
gulp.task('build', () => {
    return gulp.src('scripts/app.ts')
            .pipe(webpackStream( require('./webpack.config.js') ))
            .pipe(through.obj(function (chunk, enc, cb) {
                //chunk.contents = Buffer.from(z(chunk.contents.toString(enc)), enc);
                cb(null, chunk)
            }))
            .pipe(gulp.dest(settings.scriptDest));
});

// TASK: Watch
gulp.task('watch', () => {
    gulp.watch('scripts/**', ['build']);
})

// TASK: Default
gulp.task('default', ['watch']);

// TASK: Server
gulp.task("server", ['watch'], function(callback) {
    // Start a webpack-dev-server
    var path = require("path");

    var compiler = webpack({
        entry: {
            app: ["./bin/bundle.js"]
        },
        output: {
            path: path.resolve(__dirname, "build"),
            publicPath: "/bin/",
            filename: "bundle.js"
        }
    });

    new webpackDevServer(compiler, {
        // server and middleware options
        compress: true,
        hot: true
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        callback();
    });
});