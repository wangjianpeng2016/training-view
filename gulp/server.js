'use strict';

/*
 * 功能说明: Gulp 服务
 * @author: wangjp
 * @Date: 2017-11-13 21:51
 */
var Server = {
    'port': '8090'
};

var gulp = require('gulp');
var connect = require('gulp-connect');

/*
 * 功能说明: 创建服务
 * @author: wangjp
 * @Date: 2017-11-13 14:44
 */
gulp.task('server', function () {
    connect.server({
        root: 'dist',
        livereload: true,
        port: Server.port //服务器端口
    });
});

