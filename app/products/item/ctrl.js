'use strict';

angular.module('products').controller('products.itemCtrl', ['$scope', 'ProductsList', '$modal', '$location', '$routeParams',
    function($scope, ProductsList, $modal, $location, $routeParams) {
        
        $scope.products = ProductsList.getInstance();
        
        $scope.item = $scope.products.get($routeParams.id);
        
        if(!$scope.item) {
            $location.path('/404');
        }
        
        function onChangeList() {
            $scope.products.save();
            $scope.products.fetch();
        }
        
        function onEditItem(result) {
            if (!result) {
                return;
            }
            
            $scope.products.update(result);
            onChangeList();
        }
        
        $scope.goTo = function (path) {
            $location.path('' + path);
        }
        
        $scope.editItem = function () {
            $modal.open({
                templateUrl: '/app/products/create/tpl.html',
                controller: 'products.item.createCtrl',
                backdrop: 'static',
                scope: $scope,
                resolve: {
                    item: function () {
                        return angular.copy($scope.item);
                    }
                },
                keyboard: false,
                size: 'md'
            }).result.then(onEditItem);
        }
    }
]);