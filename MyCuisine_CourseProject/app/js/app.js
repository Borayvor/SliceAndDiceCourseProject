$(function () {
    'use strict';

    function config($routeProvider) {

        var PARTIALS_PREFIX = 'app/views/partials/';
        var CONTROLLER_AS_VIEW_MODEL = 'vm';

        $routeProvider
            .when('/', {
                templateUrl: PARTIALS_PREFIX + 'home/home.html',
                controller: 'HomeController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/Home/Location', {
                templateUrl: PARTIALS_PREFIX + 'location/location.html',
                controller: 'LocationController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/Home/Menu', {
                templateUrl: PARTIALS_PREFIX + 'menu/menu.html',
                controller: 'MenuController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/Home/Blog', {
                templateUrl: PARTIALS_PREFIX + 'blog/blog.html',
                controller: 'BlogController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .otherwise({ templateUrl: PARTIALS_PREFIX + 'errorPage/notFound.html' });

    }

    function run($http, $cookies, $rootScope, $location) {

        Parse.initialize(
           "XB25RbwIJJMPcISUFMd8yho2qwX3Kpt9useEL0eP",
           "7MDaeNRThiXJi8nm7yWIR32FPorDbj9wUkBFtEev");

        $rootScope.$on('$routeChangeError', function (ev, current, previous, rejection) {
            if (rejection === 'not authorized') {
                $location.path('/');
            }

        });        
    }

    angular.module('MyCuisine.services', []);
    angular.module('MyCuisine.directives', []);
    angular.module('MyCuisine.filters', []);

    angular.module('MyCuisine.controllers', ['MyCuisine.services']);
    angular.module('MyCuisine', [
        'ngRoute',
        'ngCookies',
        'ui.bootstrap',        
        'MyCuisine.controllers',
        'MyCuisine.directives',
        'MyCuisine.filters'])
        .config(['$routeProvider', config])
        .run(['$http', '$cookies', '$rootScope', '$location', run])
        .constant('baseServiceUrl', 'https://api.parse.com/1/');
}());