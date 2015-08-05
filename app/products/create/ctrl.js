'use strict';

angular.module('products').controller('products.item.createCtrl', ['$scope', 'item',
    function ($scope, item) {

        $scope.item = item || {
            title: null,
            brand: null,
            category: null,
            price: null
        };

        $scope.onlyLatin = /^[\x00-\x7F]*$/;

        $scope.cancel = $scope.$dismiss;

        $scope.submit = function () {
            if ($scope.editForm.$valid) {
                $scope.$close($scope.item);
            }
        };

    }]);