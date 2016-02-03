(function () {
    'use strict';

    function menuController(menuService, menuCategoryService) {
        var vm = this;
                
        vm.menuItems = {};
        vm.menuCategory = {};

        vm.header = menuService.getHeader();
        vm.directive = menuService.getDirective();

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
        .controller('MenuController', ['menuService', 'menuCategoryService', menuController]);
}());