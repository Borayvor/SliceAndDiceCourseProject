(function () {
    'use strict';
        
    function mainController() {
        var vm = this;

//         waitForLogin();
// 
//         vm.logout = function () {
//             vm.globallySetCurrentUser = undefined;
//             auth.logout();
//             waitForLogin();
//             $location.path('/');
//         };
// 
//         function waitForLogin() {
//             identity.getUser()
//                 .then(function (user) {
//                     vm.globallySetCurrentUser = user;
//                 });
//         }
    }

    angular.module('MyCuisine.controllers')
        .controller('MainController', [mainController]);
}());