(function () {
    'use strict';

    function locationController(locationService, headerAndBreadcrumpsService) {
        var vm = this;

        vm.info = {};
        
        headerAndBreadcrumpsService.set(vm, '','Fusce nunc diam suscipit a iaculis ac tristique ac erat.');
        
        locationService.getAll()
            .then(function (result) {
                vm.info = result.data[0];
            });

        locationService.getMap();
    }

    angular.module('MyCuisine.controllers')
        .controller('LocationController', [
            'locationService',
            'headerAndBreadcrumpsService',
            locationController]);
}());