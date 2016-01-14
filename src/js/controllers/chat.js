define(['./module'], function (controllers) {
  'use strict';

  controllers.controller('ChatCtrl', ['$scope', '$stateParams', 'authService', 'User', function ($scope, $stateParams, authService, User) {

    $scope.user = authService.getUser();
    $scope.messages = [];

    var conv_list = document.getElementById('conv_list');
    var scrollMessages = function() {
      var intervalId = setInterval(function() {
        conv_list.scrollTop++;
      }, 5);
      setTimeout(function() {
        clearInterval(intervalId);
      }, 2000);
    };

    var addMessage = function(msg) {
      if (msg.fromId === $scope.user._id) {
        msg.author = ($scope.user.name != 'undefined undefined' && $scope.user.name) || $scope.user.username;
        msg.alignRight = true;
      } else {
        msg.author = ($scope.friend.name != 'undefined undefined' && $scope.friend.name) || $scope.friend.username;
        msg.alignRight = false;
      }

      $scope.messages.push(msg);
      scrollMessages(-1);

      //localStorage.setObject($scope.user._id + '<->' + $scope.friend._id.id, $scope.messages);
    };

    sio.emit('identify', $scope.user._id);

    sio.on('received_message', function(message) {
      console.log('received_message', message);
      if ($scope.friend && message.fromId === $scope.friend._id.id) {
        addMessage(message);
        $scope.$apply();
      }
    });

    User.findOne({ _id: $stateParams.friendId }, function(err, friend) {
      if (!err) {
        $scope.friend = friend;

        /*var oldMsg = localStorage.getObject($scope.user._id + '<->' + $scope.friend._id.id);
        if (oldMsg) {
          $scope.messages.push.apply($scope.messages, oldMsg);
        }*/

        $scope.$apply();
      }
    });

    $scope.sendMessage = function() {
      var msg = {
        toId: $scope.friend._id.id,
        fromId: $scope.user._id,
        message: $scope.message
      };

      console.log('sending_message', msg);
      sio.emit('send_message', msg);

      addMessage(msg);
      $scope.message = '';
    };

  }]);
});
