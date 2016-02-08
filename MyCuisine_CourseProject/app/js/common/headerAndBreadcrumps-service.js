(function () {
    'use strict';

    function headerAndBreadcrumpsService($location) {
        
        function set(vm, headerTitleInfo, headerBodyInfo) {

            var locationArray = $location.path().slice(1).split('/');

            vm.headerTitle = headerTitleInfo ? headerTitleInfo : locationArray[1];
            vm.headerBody = headerBodyInfo ? headerBodyInfo : '...';           
            vm.currentLocation = locationArray.pop();
                        
            vm.location = [];
            var length = locationArray.length;
            var currentPath = '';

            for (var i = 0; i < length; i += 1) {

                if(i === 1){
                    currentPath = locationArray[0] + '/';
                }

                if (i > 0) {
                    currentPath += locationArray[i] + '/';
                }
              
                vm.location.push({
                    name: locationArray[i],
                    path: currentPath
                });
            }
        }
        
        return {
            set: set
        };
    }
        
    angular.module('MyCuisine.services')
        .factory('headerAndBreadcrumpsService', ['$location', headerAndBreadcrumpsService]);
}());