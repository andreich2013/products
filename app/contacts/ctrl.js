'use strict';

angular.module('products').controller('contactsCtrl', ['$scope',
    function ($scope) {

        $scope.contacts = {
            address: 'YouTube, LLC 901 Cherry Ave. San Bruno, CA 94066 USA',
            email: 'vakhrushev1988@gmail.com',
            phone: '+1 650-253-0001'
        };

    }
]);