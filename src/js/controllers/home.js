define(['./module'], function (controllers) {
  'use strict';

  controllers.controller('HomeCtrl', ['$scope', '$state', 'nwService', function ($scope, $state, nwService) {

    // Config window
    nwService.window.title = 'ITM Chat';
    nwService.window.height = 296;
    nwService.window.width = 250;

  }]);
});
