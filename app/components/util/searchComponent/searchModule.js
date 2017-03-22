'use strict';
angular.module('searchModule', ['util.trsSingleSelection'])
    .directive('searchComponent', [function () {
        return {
            restrict: 'E',
            // replace: true,
            templateUrl: './components/util/searchComponent/search_tpl.html'
        };
    }])
    ;