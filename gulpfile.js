var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');

gulp.task('sass', function() {
    return gulp.src('./css/source/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/compiled'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./css/source/*.scss', ['sass']);
});

gulp.task('webpack', function() {
    return gulp.src('./js/source/models/appModel.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./js/compiled'));
});

gulp.task('default', ['sass:watch', 'webpack']);