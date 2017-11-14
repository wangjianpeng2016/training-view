'use strict';

var gulp = require('gulp');
var build = require('./gulp/build');


/*
 * 功能说明: 默认操作
 * @author: wangjp
 * @Date: 2017-11-13 14:44
 */
//gulp.task('default', ['build', 'copy-index', 'connect', 'watch']);
gulp.task('default', ['clean'], function () {
    gulp.start('build');
});