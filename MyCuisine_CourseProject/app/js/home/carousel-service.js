(function () {
    'use strict';

    function carouselService(data) {

        var URL = 'data/HeaderItem';

        function getAll() {
            return data.get(URL);
        }
                
        return {
            getAll: getAll
        };
    }

    angular.module('MyCuisine.services')
        .factory('carouselService', ['data', carouselService]);
}());