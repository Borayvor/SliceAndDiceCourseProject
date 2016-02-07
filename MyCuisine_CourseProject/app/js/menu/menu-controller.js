(function () {
    'use strict';

    function menuController($location, menuService, menuCategoryService) {
        var vm = this;
       
        vm.menuItems = {};
        vm.menuCategory = {};
        vm.location = $location.path().slice(1).split('/');
        vm.headerTitle = vm.location[1];
        vm.headerBody = 'Fusce nunc diam suscipit a iaculis ac tristique ac erat.';
        vm.currentLocation = vm.location.pop();

        menuService.getAll()
            .then(function (result) {                
                vm.menuItems = result.results;                
            });

        menuCategoryService.getAll()
            .then(function (result) {
                vm.menuCategory = result.results;
            });
    }

    angular.module('MyCuisine.controllers')
        .controller('MenuController', ['$location', 'menuService', 'menuCategoryService', menuController]);
}());