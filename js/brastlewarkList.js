'use strict';

angular.module('Brastlewark.brastlewarkList', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/brastlewarkList', {
            templateUrl: 'views/brastlewarkList.html',
            controller: 'brastlewarkListCtrl'
        });
    }])
    .controller('brastlewarkListCtrl', ["$rootScope", "$scope", "getDataService", function ($rootScope, $scope, getDataService) {
        $scope.personsList = null;

        $scope.selected = {
            person: null,
            list: []
        };

        $scope.isOpenDetail = function(){
           return $scope.selected.person != null;
        };

        $scope.name = "";

        $scope.filterNameFunc = function(person){
            if(person.getName().indexOf($scope.name) != -1){
                return true
            }
            return false;
        };

        function getDataBrastlewark () {
            getDataService.getBrastlewarkPeople()
                .then(function (res) {
                    console.log(res);
                    $scope.selected.list = res;

                }).catch(function (error) {
                console.log(error);
            });
        }
        getDataBrastlewark();

    }]);