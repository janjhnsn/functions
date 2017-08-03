'use strict';

const gulp = require('gulp')
,     gutil = require("gulp-util")
,     webpack = require("webpack")
,     webpackStream = require('webpack-stream')
,     webpackDevServer = require("webpack-dev-server");

const settings = {
    scriptDest: 'bin/'
};

const weppackConfig = require('./webpack.config.js');

// TASK: Build
gulp.task('build', () => {
    return gulp.src('scripts/app.ts')
            .pipe(webpackStream( weppackConfig ))
            .pipe(gulp.dest(settings.scriptDest));
});

// TASK: Watch
gulp.task('watch', () => {
    gulp.watch('scripts/**', ['build']);
})

// TASK: Default
gulp.task('default', ['watch']);


gulp.task("webpack-dev-server", ['watch'], function(callback) {
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