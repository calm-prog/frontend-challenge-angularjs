angular.module("myApp.configService", ['ngRoute']).factory("ConfigService", 
  function () {
    return {
      getConfig: function () {
        return window.__env;
      },
    };
  },
);
