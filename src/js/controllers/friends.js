define(['./module'], function (controllers) {
  'use strict';

  controllers.controller('FriendsCtrl', ['$scope', '$state', 'authService', 'User', 'nwService', 'LocalStorage', function ($scope, $state, authService, User, nwService, LocalStorage) {

    // Config window
    nwService.window.title = 'ITM Chat - Friends';
    nwService.window.height = 701;
    nwService.window.width = 300;

    var loadFriends = function() {
      $scope.friends = [];
      for (var i = 0; i < $scope.user.friends.length; i++) {
        User.findOne({ _id: $scope.user.friends[i] }, function(err, friend) {
          if (!err) {
            $scope.friends.push(friend);
            $scope.$apply();
          }
        });
      }
    };

    $scope.user = authService.getUser();
    loadFriends();

    $scope.signout = function() {
      authService.signout();
      $state.go('home');
    };

    $scope.startChat = function(friend) {
      var win = nwService.gui.Window.open('chat/' + friend.id, {
        position: 'center',
        width: 600,
        height: 550,
        title: 'ITM Chat - ' + friend.username
      });
    }

    $scope.addFriend = function() {
      User.findOne({ username: $scope.friendUsername }, function(err, friend) {
        if (!err && friend) {
          User.update({ _id: $scope.user._id }, {
            '$push': { 'friends': friend._id }
          }, function(err, res) {
            if (err) {
              return;
            }

            $scope.friendUsername = '';

            User.findOne({ _id: $scope.user._id }, function(err, user) {
              if (user) {
                LocalStorage.setObject('user', user);
                $scope.user = user;
                loadFriends();
              }
            });
          });
        }
      });
    }

  }]);
});
