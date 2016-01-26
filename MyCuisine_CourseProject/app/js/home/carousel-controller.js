(function () {
    'use strict';

    function carouselController(carouselService) {
        var vm = this;

        vm.carouselItems = {};


        carouselService.getAll()
            .then(function (result) {
                vm.carouselItems = result.results;
            });

    }

    angular.module('MyCuisine.controllers')
        .controller('CarouselController', ['carouselService', carouselController]);
}());