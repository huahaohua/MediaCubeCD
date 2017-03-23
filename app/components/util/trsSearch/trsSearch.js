'use strict';
angular.module('util.trsSearch', ['util.trsSingleSelection'])
    .directive('trsSearch', [function () {
        return {
            restrict: 'E',
            // replace: true,
            templateUrl: './components/util/trsSearch/trsSearch_tpl.html'
        };
    }])
    ;