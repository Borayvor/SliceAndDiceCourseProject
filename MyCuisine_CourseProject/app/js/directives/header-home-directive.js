(function () {
    'use strict';

    function headerHomeDirective() {

        return {
            restrict: 'A',
            templateUrl: 'app/views/directives/header-home-directive.html'
        };
    }

    angular.module('MyCuisine.directives')
        .directive('headerHomeDirective', [headerHomeDirective]);
}());