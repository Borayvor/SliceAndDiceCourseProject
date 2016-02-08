(function () {
    'use strict';

    function notFoundController(headerAndBreadcrumpsService) {
        var vm = this;

        headerAndBreadcrumpsService.set(vm, 'Not Found', '');
    }

    angular.module('MyCuisine.controllers')
        .controller('NotFoundController', ['headerAndBreadcrumpsService', notFoundController]);
}());