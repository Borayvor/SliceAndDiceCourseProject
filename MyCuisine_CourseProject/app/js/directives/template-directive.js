(function () {
    'use strict';

    function templateDirective($compile) {

        function templateDiv(scope, element, attrs) {                       
            
            var generatedTemplate = '<div ' + scope.$parent.vm.directive.name
                + '></div>';
            var newDiv = $compile(generatedTemplate)(scope);
           
            element.append(newDiv);
        }

        return {
            restrict: 'A',
            scope: {
                item: '='
            },
            link: templateDiv
        };
    };

    angular
        .module('MyCuisine.directives')
        .directive('templateDirective', ['$compile', templateDirective]);
}());