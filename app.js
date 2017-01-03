(function() {
    'use strict';
    const PageLib = mydaka.PageLib
    angular.module('BlankApp', ['ngMaterial'])
        .controller('AppCtrl', AppCtrl);

    function AppCtrl($scope) {
        $scope.currentNavItem = 'page1 ' + PageLib.Foo();
    }
})();
