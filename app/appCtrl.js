'use strict';

angular.module('products').controller('appCtrl', ['$rootScope', '$scope', '$route',
    function ($rootScope, $scope, $route) {

        $scope.routeName = '404';

        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $scope.routeName = current.$$route ? current.$$route.title : '404';
        });

    }
]);