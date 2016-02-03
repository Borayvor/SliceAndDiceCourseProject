(function () {
    'use strict';    

    function dataService($http, $q, baseUrl) {

        function get(url, params) {
            var defered = $q.defer();

            $http
                .get(baseUrl + url, { 
                    params: params,
                    headers: {                        
                        'X-Parse-Application-Id': 'XB25RbwIJJMPcISUFMd8yho2qwX3Kpt9useEL0eP',
                        'X-Parse-REST-API-Key': 'q4rQJ2UDIPwxbXw0QWPdKz7VBj1RFz0pGiedBgib'
                    }
                })
                .then(function (response) {                    
                    defered.resolve(response.data);
                }, function (err) {
                    
                    defered.reject(err);
                });

            return defered.promise;
        }

        function post(url, data) {
            var defered = $q.defer();

            $http
                .post(baseUrl + url, data)
                .then(function (response) {
                    defered.resolve(response.data);
                }, function (err) {
                    
                    defered.reject(err);
                });

            return defered.promise;
        }

        function put(url, data) {
            var defered = $q.defer();

            $http
                .put(baseUrl + url, data)
                .then(function (response) {
                    defered.resolve(response.data);
                }, function (err) {
                    defered.reject(err);
                });

            return defered.promise;
        }

        return {
            get: get,
            post: post,
            put: put
        };
    }

    angular.module('MyCuisine.services')
        .factory('data', ['$http', '$q', 'baseServiceUrl', dataService]);
}());