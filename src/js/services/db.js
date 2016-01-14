define(['./module'], function (services) {
    'use strict';

    services.factory('db', [function() {
        var mongoose = require('mongoose');

        // Establish the database connection
        mongoose.connect('mongodb://heroku:-28Fmk4eDiRDpC03Io2s00ZBkXAt_rKRB523jV5QlZv3Z5aKKFVWjU2QZh8DlcqmCMSTn9bWRjwELZkFPxtkyw@lennon.mongohq.com:10003/app25782881', function (err) {
            // if we failed to connect, abort
            if (err) throw err;
        });

        return mongoose;
    }]);
});
