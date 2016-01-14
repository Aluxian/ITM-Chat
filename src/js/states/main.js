/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./module'], function (states) {
    'use strict';

    return states.config(['$stateProvider', 'viewProvider', function ($stateProvider, viewProvider) {

        $stateProvider.state('signup', {
            url: '/signup',
            template: viewProvider.renderView('signup'),
            controller: 'SignupCtrl'
        });

        $stateProvider.state('signin', {
            url: '/signin',
            template: viewProvider.renderView('signin'),
            controller: 'SigninCtrl'
        });

        $stateProvider.state('home', {
            url: '/home',
            template: viewProvider.renderView('home'),
            controller: 'HomeCtrl'
        });

        $stateProvider.state('friends', {
            url: '/friends',
            template: viewProvider.renderView('friends'),
            controller: 'FriendsCtrl'
        });

        $stateProvider.state('chat', {
            url: '/chat/:friendId',
            template: viewProvider.renderView('chat'),
            controller: 'ChatCtrl'
        });

    }]);
});
