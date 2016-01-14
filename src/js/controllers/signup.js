define(['./module'], function (controllers) {
  'use strict';

  controllers.controller('SignupCtrl', ['$scope', '$state', 'authService', 'nwService', function ($scope, $state, authService, nwService) {

    // Config window
    nwService.window.title = 'ITM Chat - Sign Up';
    nwService.window.height = 522;
    nwService.window.width = 250;

    $scope.user = {};

    $scope.signup = function() {
      authService.signup($scope.user, function() {
        $state.go('friends');
      });
    };

  }]);
});
