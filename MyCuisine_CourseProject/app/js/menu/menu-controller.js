(function () {
    'use strict';

    function menuController(menuService, menuCategoryService, headerAndBreadcrumpsService) {
        var vm = this;
       
        vm.menuItems = {};
        vm.menuCategory = {};        

        headerAndBreadcrumpsService.set(vm, '', 'Fusce nunc diam suscipit a iaculis ac tristique ac erat.');

        menuService.getAll()
            .then(function (result) {                
                vm.menuItems = result.data;
            });

        menuCategoryService.getAll()
            .then(function (result) {
                var reordered = [];
                var len = result.data.length;

                for (var i = len - 1; i >= 0; i -= 1){
                    reordered.push(result.data[i]);
                }

                vm.menuCategory = reordered;
            });
    }

    angular.module('MyCuisine.controllers')
        .controller('MenuController', [
            'menuService',
            'menuCategoryService',
            'headerAndBreadcrumpsService',
            menuController]);
}());