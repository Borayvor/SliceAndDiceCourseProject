(function () {
    'use strict';

    function locationInfoDirective() {
                
        return {
            restrict: 'A',
            templateUrl: 'app/views/partials/location/location-info-directive.html',
            scope: {
                item: '='
            },
            controller: 'LocationController',
            controllerAs: 'vm',
            bindToController: true
        };
    };

    angular
        .module('MyCuisine.directives')
        .directive('locationInfoDirective', [locationInfoDirective]);
}());