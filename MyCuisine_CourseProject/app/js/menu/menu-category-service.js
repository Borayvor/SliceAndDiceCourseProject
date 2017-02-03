(function () {
    'use strict';

    function menuCategoryService(data) {

        var Url = 'data/Category';

        function getAll() {

            return data.get(Url);
        }


        return {
            getAll: getAll
        };
    }

    angular.module('MyCuisine.services')
        .factory('menuCategoryService', ['data', menuCategoryService]);
}());