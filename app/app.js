"use strict";

angular
  .module("myApp", [
    "ngRoute",
    "myApp.view1",
    "myApp.view2",
    "myApp.configService",
    "myApp.unsplashService",
  ])
  .config([
    "$locationProvider",
    "$routeProvider",
    function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      $routeProvider.otherwise({ redirectTo: "/view1" });
    },
  ])
  .controller("ImageSearchController", [
    "$scope",
    "UnsplashService",
    function ($scope, UnsplashService) {
      $scope.query = "";
      $scope.images = [];
      $scope.page = 1;
      $scope.perPage = 10;

      $scope.searchImages = function () {
        if ($scope.query.trim() === "") {
          return;
        }

        $scope.page = 1;
        $scope.images = [];

        UnsplashService.searchImages($scope.query, $scope.page, $scope.perPage)
          .then(function (data) {
            $scope.images = data.results;
          })
          .catch(function (error) {
            console.error("Error during image search:", error);
          });
      };

      $scope.loadMore = function () {
        $scope.page++;

        UnsplashService.searchImages($scope.query, $scope.page, $scope.perPage)
          .then(function (data) {
            $scope.images = $scope.images.concat(data.results);
          })
          .catch(function (error) {
            console.error("Error loading more images:", error);
          });
      };

      $scope.searchImages();
    },
  ]);
