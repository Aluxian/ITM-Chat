define(['./module'], function (controllers) {
  'use strict';

  controllers.controller('SigninCtrl', ['$scope', '$state', 'authService', 'nwService', function ($scope, $state, authService, nwService) {

    // Config window
    nwService.window.title = 'ITM Chat - Sign In';
    nwService.window.height = 300;
    nwService.window.width = 250;

    $scope.user = {};

    $scope.signin = function() {
      authService.signin($scope.user, function(successfull) {
        if (successfull) {
          $state.go('friends');
        } else {
          $scope.error = "Wrong credentials!";
        }
      });
    };

  }]);
});
