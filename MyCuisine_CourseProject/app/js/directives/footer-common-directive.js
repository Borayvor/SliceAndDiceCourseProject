(function () {
    'use strict';

    function footerCommonDirective() {
                
        return {
            restrict: 'A',
            templateUrl: 'app/views/directives/footer-common-directive.html'
        };
    }

    angular.module('MyCuisine.directives')
        .directive('footerCommonDirective', [footerCommonDirective]);
}());