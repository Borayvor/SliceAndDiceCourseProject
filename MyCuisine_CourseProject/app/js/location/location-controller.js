(function () {
    'use strict';

    function locationController(locationService) {
        var vm = this;

        vm.info = {};

        locationService.getAll()
            .then(function (result) {
                vm.info = result.results[0];
            });

        locationService.getMap();
    }

    angular.module('MyCuisine.controllers')
        .controller('LocationController', ['locationService', locationController]);
}());