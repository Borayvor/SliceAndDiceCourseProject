(function () {
    'use strict';

    function headerAndBreadcrumpsService($location) {
        
        function set(vm, headerTitleInfo, headerBodyInfo) {
            vm.location = $location.path().slice(1).split('/');
            vm.headerTitle = headerTitleInfo ? headerTitleInfo : vm.location[1];
            vm.headerBody = headerBodyInfo ? headerBodyInfo : '...';
            vm.currentLocation = vm.location.pop();
        }
        
        return {
            set: set
        }
    }
        
    angular.module('MyCuisine.services')
        .factory('headerAndBreadcrumpsService', ['$location', headerAndBreadcrumpsService]);
}());