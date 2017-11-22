'use strict';

/*
 * 功能说明: 用户服务层
 * @author: wangjp
 * @Date: 2017-11-14 15:28
 */
training.service('UserService', ['BaseConstant', 'BaseService', function (BaseConstant, BaseService) {

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


        return BaseService.ajax({
            'url': BaseConstant.basePath+'heroUserController/list'
        })

    };

    return service;
}]);