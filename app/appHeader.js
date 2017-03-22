'use strict';

angular.module('headModule', [])
    .controller('HeaderController', ['$scope', '$q', '$interval', '$filter', '$rootScope', '$state', '$location', '$timeout', 'localStorageService', "trsHttpService", 'trsconfirm', 'loginService', 'versionCtrl',
        function($scope, $q, $interval, $filter, $rootScope, $state, $location, $timeout, localStorageService, trsHttpService, trsconfirm, loginService, versionCtrl) {
            initStatus();
            initData();

            function initStatus() {
                $scope.currModule = $location.path().split('/')[1];
            }

            function initData() {
                
            }
            
        }
    ]);
