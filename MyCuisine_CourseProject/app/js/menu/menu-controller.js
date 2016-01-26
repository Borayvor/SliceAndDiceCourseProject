(function () {
    'use strict';

    function menuController(menuService) {
        var vm = this;
                
        vm.menuItems = {};

        menuService.getAll()
            .then(function (result) {
                
                vm.menuItems = result.results;
                //console.log(vm.menuItems);
            });
    }

    angular.module('MyCuisine.controllers')
        .controller('MenuController', ['menuService', menuController]);
}());