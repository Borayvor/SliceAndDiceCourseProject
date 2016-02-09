(function () {
    'use strict';

    function blogController(headerAndBreadcrumpsService) {
        var vm = this;

        headerAndBreadcrumpsService.set(vm, '', 'Fusce nunc diam suscipit a iaculis ac tristique ac erat.');
    }

    angular.module('MyCuisine.controllers')
        .controller('BlogController', ['headerAndBreadcrumpsService', blogController]);
}());