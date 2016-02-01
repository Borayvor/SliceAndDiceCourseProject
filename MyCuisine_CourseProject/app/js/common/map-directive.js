(function () {
    'use strict';

    function mapDirective() {

        function initMap($scope, $element, $attrs) {

            var test = $element.children("#map");
            console.log(test);

            var mapDiv = document.getElementById('map');

            console.log(mapDiv);
            var map = new google.maps.Map(mapDiv, {
                center: { lat: 42.6508509, lng: 23.377237 },
                zoom: 15
            });
        }

        return {
            restrict: 'A',
            controller: initMap
        }
    }

    angular.module('MyCuisine.directives')
        .directive('mapDirective', [mapDirective]);
}());