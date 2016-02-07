(function () {
    'use strict';

    function sloganDirective() {

        return {
            restrict: 'A',
            templateUrl: 'app/views/directives/slogan-directive.html'
        };
    }

    angular.module('MyCuisine.directives')
        .directive('sloganDirective', [sloganDirective]);
}());