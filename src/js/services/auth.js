define(['./module'], function (services) {
    'use strict';

    services.service('authService', ['$state', 'User', 'LocalStorage', function($state, User, LocalStorage) {

        this.getUser = function() {
            return LocalStorage.getObject('user');
        };

        this.signin = function(user, cb) {
            User.findOne({ username: user.username }, function(err, mUser) {
                if (mUser && mUser.password === user.password) {
                    LocalStorage.setObject('user', mUser);
                    cb(true);
                }
                cb(false);
            });
        };

        this.signup = function(user, cb) {
            User.create(user, function(err, mUser) {
                LocalStorage.setObject('user', mUser);
                cb();
            });
        };

        this.signout = function() {
            LocalStorage.setObject('user', undefined);
        };

    }]);
});
