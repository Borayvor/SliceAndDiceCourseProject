(function () {
    'use strict';

    function locationController(locationService) {
        var vm = this;

        locationService.getMap();

    }

    angular.module('MyCuisine.controllers')
        .controller('LocationController', ['locationService', locationController]);
}());