(function () {
    'use strict';

    function carouselService(data) {

        var URL = 'classes/HeaderItem';

        function getAll() {
            return data.get(URL);
        }
                
        return {
            getAll: getAll
        }
    }

    angular.module('MyCuisine.services')
        .factory('carouselService', ['data', carouselService])
}());