(function () {
    'use strict';

    function menuService(data) {

        var Url = 'classes/Menu?include=category';
        
        function getAll() {            

            return data.get(Url);
        }

        function getRecommended() {

            var urlRecommended = Url + '&where={"recommendation":true}';

            return data.get(urlRecommended)
        }

        return {
            getAll: getAll,
            getRecommended: getRecommended
        }
    }

    angular.module('MyCuisine.services')
        .factory('menuService', ['data', menuService])
}());