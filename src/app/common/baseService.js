'use strict';


/*
 * 功能说明: 基础服务
 * @author: wangjp
 * @Date: 2017-11-14 15:47
 */
training.service('BaseService', ['$q', '$resource', '$http', function($q, $resource, $http){

    var result = {};

    //获取列表
    result.list = function(url, param){
        var deferred = $q.defer();
        var promise = deferred.promise;

        var resource = $resource(url, param ,{getList:{method:'POST',isArray:true}});

        resource.getList(function(data) {
            deferred.resolve(data);
        }, function(error) {
            deferred.reject(error);
        });
        return promise;
    };

    //获取单条记录
    result.single = function(param){
        var deferred = $q.defer();
        var promise = deferred.promise;

        var resource = $resource(param.url, param.data,{single:{method:'POST',isArray:false}});

        resource.single(function(data) {
            deferred.resolve(data);
        }, function(error) {
            deferred.reject(error);
        });
        return promise;
    };

    //异步请求
    result.ajax = function(param){


        var promise = $http({
            method:'POST',
            url: param.url,
            data: param.data
        }).then(function successCallback(response) {
            console.log('成功了');
        }, function errorCallback(response) {
            console.log('失败了');
        });

        return promise;
    };
    return result;
}]);