'use strict';

angular.module('products').controller('products.listCtrl', ['$scope', 'ProductsList', '$modal', '$location',
    function ($scope, ProductsList, $modal, $location) {

        $scope.products = ProductsList.getInstance();

        function onChangeList() {
            $scope.products.save();
            $scope.products.fetch();
        }

        function onCreateItem(result) {
            if (!result) {
                return;
            }

            $scope.products.add(result);
            onChangeList();
        }

        $scope.createItem = function () {
            $modal.open({
                templateUrl: '/app/products/create/tpl.html',
                controller: 'products.item.createCtrl',
                backdrop: 'static',
                scope: $scope,
                resolve: {
                    item: function () {
                        return null;
                    }
                },
                keyboard: false,
                size: 'md'
            }).result.then(onCreateItem);
        }

        $scope.chooseItem = function (id) {
            $location.path('/products/' + id);
        };
    }
]);