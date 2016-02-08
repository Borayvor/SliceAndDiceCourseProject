(function () {
    'use strict';

    function menuController(menuService, menuCategoryService, headerAndBreadcrumpsService) {
        var vm = this;
       
        vm.menuItems = {};
        vm.menuCategory = {};        

        headerAndBreadcrumpsService.set(vm, '', 'Fusce nunc diam suscipit a iaculis ac tristique ac erat.');

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
        .controller('MenuController', [
            'menuService',
            'menuCategoryService',
            'headerAndBreadcrumpsService',
            menuController]);
}());