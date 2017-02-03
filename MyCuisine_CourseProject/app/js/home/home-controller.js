(function () {
    'use strict';
       
    function homeController(carouselService, menuService, locationService, testimonialsService) {
        var vm = this;
       
        vm.carouselItems = {};
        vm.menuItems = {};
        vm.info = {};
        vm.testimonial = {};

        carouselService.getAll()
            .then(function (result) {
                vm.carouselItems = result.data;
            });        

        menuService.getRecommended()
            .then(function (result) {
                vm.menuItems = result.data;
            });

        testimonialsService.getAll()
            .then(function (result) {
                vm.testimonial = result.data[0];
            });
                
        locationService.getAll()
            .then(function (result) {
                vm.info = result.data[0];
            });

        locationService.getMap();
    }

    angular.module('MyCuisine.controllers')
        .controller('HomeController', [
            'carouselService',
            'menuService',
            'locationService',
            'testimonialsService',
            homeController]);
}());