(function () {
    'use strict';

    function menuService(data) {

        var Url = 'classes/Menu?include=category';

        function getHeader() {
            return {
                title: 'Menu',
                body: 'Fusce nunc diam suscipit a iaculis ac tristique ac erat...'
            };
        }

        function getDirective() {
            return {
                name: 'menu-all-directive'
            };
        }
        
        function getAll() {            

            return data.get(Url);
        }

        function getRecommended() {

            var urlRecommended = Url + '&where={"recommendation":true}';

            return data.get(urlRecommended);
        }

        return {
            getHeader: getHeader,
            getDirective: getDirective,
            getAll: getAll,
            getRecommended: getRecommended
        };
    }

    angular.module('MyCuisine.services')
        .factory('menuService', ['data', menuService]);
}());