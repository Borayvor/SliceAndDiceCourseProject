(function () {
    'use strict';

    function locationInfoDirective() {

        return {
            restrict: 'A',
            templateUrl: 'app/views/partials/location/location-info-directive.html'
        };
    };

    angular
        .module('MyCuisine.directives')
        .directive('locationInfoDirective', [locationInfoDirective]);
}());