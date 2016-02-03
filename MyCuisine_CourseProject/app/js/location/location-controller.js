(function () {
    'use strict';

    function locationController(locationService) {
        var vm = this;

        vm.header = locationService.getHeader();
        vm.directive = locationService.getDirective();

        //locationService.initMap();

    }

    angular.module('MyCuisine.controllers')
        .controller('LocationController', ['locationService', locationController]);
}());