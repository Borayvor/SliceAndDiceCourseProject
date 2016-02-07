(function () {
    'use strict';

    function footerHomeDirective() {

        return {
            restrict: 'A',
            templateUrl: 'app/views/directives/footer-home-directive.html'
        };
    }

    angular.module('MyCuisine.directives')
        .directive('footerHomeDirective', [footerHomeDirective]);
}());