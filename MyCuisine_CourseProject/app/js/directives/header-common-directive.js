(function () {
    'use strict';

    function headerCommonDirective() {

        return {
            restrict: 'A',
            templateUrl: 'app/views/directives/header-common-directive.html'
        };
    }

    angular.module('MyCuisine.directives')
        .directive('headerCommonDirective', [headerCommonDirective]);
}());