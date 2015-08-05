'use strict';

angular.module('products').factory('ProductsList', ['$collection', '$window',
    function ($collection, $window) {

        var ProductsList = $collection;

        ProductsList.prototype.fetch = function () {
            try {
                var data = $window.localStorage.getItem('productsList');

                this.addAll(JSON.parse(data));
            } catch (e) {

            }
        }

        ProductsList.prototype.save = function () {
            try {
                var data = JSON.stringify(this.all());

                var data = $window.localStorage.setItem('productsList', data);
            } catch (e) {

            }
        }

        ProductsList.prototype.initialize = function () {
            this.fetch();
        }

        return ProductsList;
    }]);