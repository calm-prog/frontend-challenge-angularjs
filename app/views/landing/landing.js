'use strict';

angular.module('myApp.landingView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/landing/landing.html'
  });
}])