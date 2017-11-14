

training.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/index');

    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'pages/base/index.html'
                },
                'topbar@index': {
                    templateUrl: 'pages/base/topbar.html'
                },
                'main@index': {
                    templateUrl: 'pages/base/home.html'
                }
            }
        })
        .state('index.usermng', {
            url: '/usermng',
            views: {
                'main@index': {
                    templateUrl: 'pages/users/usermng.html',
                    controller: 'UserController'
                }
            }
        })
        .state('index.usermng.userlist', {
            url: '/userlist',
            templateUrl: 'pages/users/userlist.html',
            controller: 'UserController'
        })
        .state('index.usermng.blacklist', {
            url: '/blacklist',
            templateUrl: 'pages/users/blacklist.html',
            controller: 'UserController'
        })
        ;



}]);