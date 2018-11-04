
var app = angular.module('loginApp');
 
  app.controller('HomeController', 
  function($scope, $rootScope, $stateParams, $state, LoginService) {
    $scope.user = $rootScope.userName;
    
  });