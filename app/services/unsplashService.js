const BASE_URL = "https://api.unsplash.com";
angular
  .module("myApp.unsplashService", ["ngRoute", "myApp.configService"])
  .factory("UnsplashService", [
    "$http",
    "ConfigService",
    function ($http, ConfigService) {
      return {
        searchImages: function (query, page, perPage) {
          const clientId = ConfigService.getConfig().apiKey;

          return $http
            .get(BASE_URL + "/search/photos", {
              params: {
                client_id: clientId,
                query: query,
                page: page,
                per_page: perPage,
              },
            })
            .then(function (response) {
              return response.data;
            });
        },
      };
    },
  ]);
