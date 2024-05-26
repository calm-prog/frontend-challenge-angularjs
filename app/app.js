"use strict";

angular
  .module("myApp", [
    "ngRoute",
    "myApp.landingView",
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

      $routeProvider.otherwise({ redirectTo: "/" });
    },
  ])
  .controller("ImageSearchController", [
    "$scope",
    "$location",
    "UnsplashService",
    function ($scope, $location, UnsplashService) {
      $scope.query = "";
      $scope.images = undefined;
      $scope.page = 1;
      $scope.perPage = 10;

      $scope.searchImages = function () {
        if ($scope.query.trim() === "") {
          return;
        }

        UnsplashService.searchImages($scope.query, $scope.page, $scope.perPage)
          .then(function (data) {
            $scope.images = data.results
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

      $scope.$watch('images', function(newImages, oldImages) {
        if (newImages !== oldImages) {
            if (newImages === undefined) {
              $location.path("/");
            } else if (newImages.length === 0) {
                $location.path("/view2");
            } else {
                $location.path("/view1");
            }
          }
      });

      $scope.searchImages();
    },
  ]);
