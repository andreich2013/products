'use strict';

(function () {
    $(document).ready(function (e) {
        angular.bootstrap(document, ['products']);

        $('.page-preloader').css({
            display: 'none'
        });
    });

}());