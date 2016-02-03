(function () {
    'use strict';

    function menuCategoryService(data) {

        var Url = 'classes/Category';
                
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