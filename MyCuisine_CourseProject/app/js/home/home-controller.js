(function () {
    'use strict';
       
    function homeController(carouselService, menuService) {
        var vm = this;
        
        vm.carouselItems = {};
        vm.menuItems = {};

        carouselService.getAll()
            .then(function (result) {
                vm.carouselItems = result.results;
            });        

        menuService.getAll()
            .then(function (result) {
                vm.menuItems = result.results;               
            });

    }

    angular.module('MyCuisine.controllers')
        .controller('HomeController', ['carouselService', 'menuService', homeController]);
}());