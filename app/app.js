'use strict';

angular.module('products', [
    'ngRoute',
    'ngCollection',
    'ui.bootstrap',
    'ngAnimate'
])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            title: 'home',
            redirectTo: '/home'
        })
        .when('/home', {
            title: 'home',
            templateUrl: '/app/home/tpl.html'
        })
        .when('/contacts', {
            title: 'contacts',
            templateUrl: '/app/contacts/tpl.html'
        })
        .when('/products', {
            title: 'products',
            templateUrl: '/app/products/list/tpl.html'
        })
        .when('/products/:id', {
            title: 'products',
            templateUrl: '/app/products/item/tpl.html'
        })
        .when('/404', {
            title: '404',
            templateUrl: '/app/404/tpl.html'
        })
        .otherwise({
            redirectTo: '/404'
        });

    $locationProvider.html5Mode(true).hashPrefix('!');
}])
.run(['$rootScope', '$location', '$route',
    function ($rootScope, $location, $route) {

}]);