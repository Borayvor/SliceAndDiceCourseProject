(function () {
    'use strict';
       
    function homeController(carouselService, menuService, locationService) {
        var vm = this;
                
        vm.carouselItems = {};
        vm.menuItems = {};
        vm.info = {};

        carouselService.getAll()
            .then(function (result) {
                vm.carouselItems = result.results;
            });        

        menuService.getRecommended()
            .then(function (result) {
                vm.menuItems = result.results;
            });
                
        locationService.getAll()
            .then(function (result) {
                vm.info = result.results[0];
            });

        locationService.getMap();
    }

    angular.module('MyCuisine.controllers')
        .controller('HomeController', ['carouselService', 'menuService', 'locationService', homeController]);
}());