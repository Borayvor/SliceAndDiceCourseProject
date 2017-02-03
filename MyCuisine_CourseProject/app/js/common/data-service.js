(function () {
    'use strict';    

    function dataService($http, $q, baseUrl) {

        function get(url, params) {
            var defered = $q.defer();

            $http
                .get(baseUrl + url, { 
                    params: params,                    
                    headers: {                        
                        'application-id': '939DE2E3-9FEA-0725-FF31-8B881022B300',
                        'secret-key': '1CB59391-C2B3-887A-FFB8-7843EA0E7100',
                        'application-type': 'REST'
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