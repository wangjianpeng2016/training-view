'use strict';

/*
 * 功能说明: Gulp 项目构建工具
 * @author: wangjp
 * @Date: 2017-11-13 20:44
 */

var gulp = require('gulp');
var path = require('path');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var del = require('del');
var conf = require('./conf');
var server = require('./server');

/*
 * 功能说明: 清楚发布内容
 * @author: wangjp
 * @Date: 2017-11-13 20:58
 */
gulp.task('clean', function () {
    return del([path.join('dist/**', '/**')]);
});

/*
 * 功能说明: 构建项目基础
 * @author: wangjp
 * @Date: 2017-11-13 18:09
 */
gulp.task('build', [
    'build-vendor-js',
    'build-vendor-styles',
    'build-src',
    'build-html',
    'build-pages',
    'server',
    'build-watch'
]);

/*
 * 功能说明: 构建基础依赖
 * @author: wangjp
 * @Date: 2017-11-13 20:59
 */
gulp.task('build-vendor-js', function () {

    return gulp.src(conf.dependencies)
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build-vendor-styles', function () {

    return gulp.src(conf.styles)
        .pipe(concat('vendor.min.css'))

        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'));
});

/*
 * 功能说明: 构建工程源码
 * @author: wangjp
 * @Date: 2017-11-13 22:05
 */
gulp.task('build-src', function () {
    return gulp.src([
        'src/app/app.js',
        'src/app/config/**',
        'src/app/controllers/**'
    ]).pipe(concat('app.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

/*
 * 功能说明: 构建html页面
 * @author: wangjp
 * @Date: 2017-11-13 22:16
 */
gulp.task('build-html', function(){

    return gulp.src('src/index.html').pipe(gulp.dest('dist'));
});

/*
 * 功能说明: 构建工程页面
 * @author: wangjp
 * @Date: 2017-11-14 9:21
 */
gulp.task('build-pages', function(){

    return gulp.src('src/app/pages/**').pipe(gulp.dest('dist/pages'));
});

/*
 * 功能说明: 监控器
 * @author: wangjp
 * @Date: 2017-11-13 14:44
 */
gulp.task('build-watch', function() {
    gulp.watch('src/**', ['build-src', 'build-html', 'build-pages']);
});

