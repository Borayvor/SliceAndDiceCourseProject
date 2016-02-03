(function () {
    'use strict';

    function menuAllDirective() {        

        return {
            restrict: 'A',
            templateUrl: 'app/views/partials/menu/menu-all-directive-directive.html'
        };
    };

    angular
        .module('MyCuisine.directives')
        .directive('menuAllDirective', [menuAllDirective]);
}());