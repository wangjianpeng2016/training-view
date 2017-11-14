'use strict';
/*
 * 功能说明: 用户控制器
 * @author: wangjp
 * @Date: 2017-11-13 22:23
 */
training.controller('UserController', ['$scope', 'UserService', function ($scope, UserService) {
    $scope.users = [{
        id: 1,
        name: '吕布',
        age: 10
    }, {
        id: 2,
        name: '赵云',
        age: 20
    }, {
        id: 3,
        name: '典韦',
        age: 30
    }];


    UserService.list().then(function(data){

        console.log(data);
    });

}]);