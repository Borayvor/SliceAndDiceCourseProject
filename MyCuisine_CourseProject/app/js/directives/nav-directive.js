﻿(function () {
    'use strict';

    function navDirective() {

        function clickedLink($scope, $element, $attrs) {

            $element.on('click', 'a', function () {
                var name,
                    location = $(this).attr('href').slice(2).split('/');
                
                if (location.length > 1) {
                    name = location[1];
                } else {
                    name = 'Home';
                }

                $('#myCuisine-navbar-collapse li[name=' + name + ']').parent().children('.active').removeClass('active');
                $('#myCuisine-footer nav li[name=' + name + ']').parent().children('.active').removeClass('active');

                $('#myCuisine-navbar-collapse li[name=' + name + ']').addClass('active');
                $('#myCuisine-footer nav li[name=' + name + ']').addClass('active');
            });
        };

        return {
            restrict: 'A',
            controller: clickedLink
        };
    }

    angular.module('MyCuisine.directives')
        .directive('navDirective', [navDirective]);
}());