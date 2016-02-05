(function () {
    'use strict';

    function locationController($location, locationService) {
        var vm = this;

        vm.info = {};
        vm.location = $location.path().slice(1).split('/');
        vm.headerTitle = vm.location[1];
        vm.headerBody = 'Fusce nunc diam suscipit a iaculis ac tristique ac erat.';
        vm.currentLocation = vm.location.pop();
        
        locationService.getAll()
            .then(function (result) {
                vm.info = result.results[0];
            });

        locationService.getMap();
    }

    angular.module('MyCuisine.controllers')
        .controller('LocationController', ['$location', 'locationService', locationController]);
}());