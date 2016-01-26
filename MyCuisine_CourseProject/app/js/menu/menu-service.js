(function () {
    'use strict';

    function menuService(data) {

        var URL = 'classes/Menu';
        
        function getAll() {
            var query = 'include=category';

            return data.get(URL, query);
        }

        return {
            getAll: getAll
        }
    }

    angular.module('MyCuisine.services')
        .factory('menuService', ['data', menuService])
}());