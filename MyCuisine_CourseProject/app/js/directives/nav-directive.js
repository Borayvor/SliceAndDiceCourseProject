(function () {
    'use strict';

    function navDirective() {

        var clickedLink = function clickedLink($scope, $element, $attrs) {

            $element.on('click', 'a', function () {
                var name;

                if ($(this).attr("id") === 'logo') {
                    name = $('#myCuisine-navbar-collapse').children("ul").children().first().attr('name');
                } else {
                    name = $(this).parent().attr('name');
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