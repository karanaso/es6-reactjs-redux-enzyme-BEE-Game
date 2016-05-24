var gulp = require('gulp');

var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');

var babelify = require('babelify');

var concat = require('gulp-concat');
var rename = require('gulp-rename');

var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
// LESS/CSS
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var path = require('path');

function map_error(err) {
  if (err.fileName) {
    // regular error
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
      + ': '
      + 'Line '
      + chalk.magenta(err.lineNumber)
      + ' & '
      + 'Column '
      + chalk.magenta(err.columnNumber || err.column)
      + ': '
      + chalk.blue(err.description))
  } else {
    // browserify error..
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.message))
  }

  this.end()
}

//

var config = {
    client : {
        html : {
            path : '0.source/client/html/',
            file : 'index.html',
        },
        jsx : {
            path : '0.source/client/',
            indexFile : 'index.jsx',
            dist : 'www/js'
        },
        less : {
            path : '0.source/client',
            buildFile : '/less/imports.less',
            watchFiles : '/**/*.less'
        }
    },
    server : {

    }
};

babelify.configure({
  babelrc: './.babelrc'
});

// build-JSX Debug/Live/Development
gulp.task('buildJSXDebug', function() {
  livereload({ start: true })
  var bundleStream = browserify({entries: config.client.jsx.path+'/'+config.client.jsx.indexFile, extensions: ['.jsx','.js'], debug: true})
    .on('error', map_error)
    .transform('babelify')
    .bundle();

  bundleStream
    .pipe(source('app.min.js'))
    .pipe(gulp.dest('www/js/'))
    .pipe( livereload() );
});

// build-JSX
gulp.task('buildJSX', function() {
  var bundleStream = browserify({entries: config.client.jsx.path+'/'+config.client.jsx.indexFile, extensions: ['.jsx','.js'], debug: false})
    .on('error', map_error)
    .transform('babelify')
    .bundle();

  bundleStream
     .pipe(source('index.js'))
     .pipe(streamify(uglify()))
     .pipe(rename('app.min.js'))
    .pipe(gulp.dest('www/js/'));
});

//copy index.html to www/
gulp.task('buildIndexHTML', function () {
    gulp.src( config.client.html.path +'/'+config.client.html.file)
        .pipe( plumber() )
        .pipe( gulp.dest('www') )
        .pipe( livereload() );
});

gulp.task('buildLESS', function () {
    gulp.src( config.client.less.path + config.client.less.buildFile )
        .pipe( plumber() )
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('./www/css'))
        .pipe( livereload() );

    //copy font-awesome fonts
    gulp.src( 'node_modules/font-awesome/fonts/*.*').pipe( gulp.dest('www/fonts'));
});

gulp.task('watch', ['buildDebug'], function() {
    livereload.listen();
    gulp.watch([config.client.jsx.path+'/*.jsx',config.client.jsx.path+'/**/*.js'], ['buildJSXDebug']);
    gulp.watch([config.client.jsx.path+'/**/*.jsx',config.client.jsx.path+'/**/*.js'], ['buildJSXDebug']);
    gulp.watch(config.client.less.path+config.client.less.watchFiles, ['buildLESS']);
    gulp.watch(config.client.html.path+'/**/*.html', ['buildIndexHTML']);
});
gulp.task('buildDebug', [ 'buildIndexHTML','buildJSXDebug', 'buildLESS']);

gulp.task('buildRelease', ['buildJSX','buildLESS','buildIndexHTML']);


gulp.task('default', ['buildDebug','watch']);
