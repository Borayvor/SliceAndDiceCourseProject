(function () {
    'use strict';

    function breadcrumbsDirective() {

        return {
            restrict: 'A',
            templateUrl: 'app/views/directives/breadcrumbs-directive.html'
        };
    }

    angular.module('MyCuisine.directives')
        .directive('breadcrumbsDirective', [breadcrumbsDirective]);
}());