(function () {
    'use strict';

    function testimonialsService(data) {

        var URL = 'classes/Testimonials?include=customer';

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