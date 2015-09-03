(function () {
    'use strict';

    var gem = { name: 'Azurite', price: 2.95 };
    var app = angular.module('gemStore', []);
    app.controller('StoreController', function ($scope) {
        $scope.world = "caceta";
        $scope.ppk = "pererek";
    });
}());
