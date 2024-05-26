'use strict';

angular.module('myApp.noResultsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/noResults', {
    templateUrl: 'views/no-results/noResults.html',
    controller: 'noResultsCtrl'
  });
}])

.controller('noResultsCtrl', [function() {

}]);