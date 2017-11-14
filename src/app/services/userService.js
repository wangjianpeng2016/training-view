'use strict';

/*
 * 功能说明: 用户服务层
 * @author: wangjp
 * @Date: 2017-11-14 15:28
 */
training.service('UserService', ['BaseConstant', function (BaseConstant) {

    /*
     * 功能说明: 定义一个服务对象
     * @author: wangjp
     * @Date: 2017-11-14 15:30
     */
    var service = {

    };

    /*
     * 功能说明: 查询用户列表
     * @author: wangjp
     * @Date: 2017-11-14 15:30
     */
    service.list = function () {
        console.log('BaseConstant: '+BaseConstant.basePath);
    };

    return service;
}]);