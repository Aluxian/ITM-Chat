/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define("app", [
    'angular',
    'angular-ui-router',
    'text!',
    'angular-foundation',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index',
    './views/index',
    './states/index',
    './models/index'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'app.services',
        'app.controllers',
        //'app.filters',
        //'app.directives',
        'app.views',
        'app.states',
        'app.models',
        'ui.router',
        'mm.foundation'
    ]).run(function($state, $location, $window, authService) {

        if ($location.path().substring(0, 6) != '/chat/') {
            var user = authService.getUser();

            if (user && Object.keys(user).length) {
                $state.go('friends');
            } else {
                $state.go('home');
            }
        }

        $window.sio = io.connect('http://localhost:5555');

    });
});
