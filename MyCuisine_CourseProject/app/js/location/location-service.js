(function () {
    'use strict';

    function locationService(data) {

        function getHeader() {
            return {
                title: 'Location',
                body: 'Fusce nunc diam suscipit a iaculis ac tristique ac erat...'
            };
        }

        function getDirective() {
            return {
                name: 'location-info-directive'
            };
        }

        function initMap() {
            var map,
            center,
            marker,
            mapOptions,
            markerOptions;

            center = new google.maps.LatLng(42.650698, 23.379031);

            mapOptions = {
                zoom: 15,
                center: center,

            };

            map = new google.maps.Map(document.getElementById('map'), mapOptions);

            markerOptions = {
                map: map,
                position: center
            };

            marker = new google.maps.Marker(markerOptions);

            window.setTimeout(function () {
                google.maps.event.trigger(map, 'resize');
            }, 100);
        }

        

        return {
            getHeader: getHeader,
            getDirective: getDirective,
            initMap: initMap            
        };
    }

    angular.module('MyCuisine.services')
        .factory('locationService', ['data', locationService]);
}());