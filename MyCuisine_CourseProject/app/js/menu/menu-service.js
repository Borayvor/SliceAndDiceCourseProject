(function () {
    'use strict';

    function menuService(data) {

        var Url = 'data/Menu';
        
        function getAll() {
            var urlPageSize = Url + '?pageSize=100';

            return data.get(urlPageSize);
        }

        function getRecommended() {

            var urlRecommended = Url + '?where=recommendation=true';

            return data.get(urlRecommended);
        }

        return {
            getAll: getAll,
            getRecommended: getRecommended
        };
    }

    angular.module('MyCuisine.services')
        .factory('menuService', ['data', menuService]);
}());