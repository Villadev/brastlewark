'use strict';

// Declare app level module which depends on views, and components
angular.module('Brastlewark', [
  'ngRoute',
  'Brastlewark.brastlewarkList',
  'Brastlewark.view2'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/brastlewarkList'});
}]).controller('appCtrl', ["$rootScope", "$scope",  function($rootScope, $scope){

    $scope.modelFilter  = "";
    $rootScope.modelFilter = $scope.modelFilter;

}]);
