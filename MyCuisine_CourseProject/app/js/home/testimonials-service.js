(function () {
    'use strict';

    function testimonialsService(data) {

        var URL = 'data/Testimonials';

        function getAll() {
            return data.get(URL);
        }

        return {
            getAll: getAll
        };
    }

    angular.module('MyCuisine.services')
        .factory('testimonialsService', ['data', testimonialsService]);
}());