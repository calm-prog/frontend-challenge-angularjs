'use strict';

angular.module('myApp.imagesView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/images', {
    templateUrl: 'views/images/images.html',
    controller: 'imagesCtrl'
  });
}])

.controller('imagesCtrl', [function() {

}]);