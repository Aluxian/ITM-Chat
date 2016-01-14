define(['./module'], function (services) {
  'use strict';

  services.service('LocalStorage', ['$window', function($window) {

    Storage.prototype.setObject = function(key, value) {
      this.setItem(key, JSON.stringify(value));
    }

    Storage.prototype.getObject = function(key) {
      try {
          var value = this.getItem(key);
          return value && JSON.parse(value);
      } catch(ex) {
          this.setObject(key, {});
          return {};
      }
    }

    return $window.localStorage;

  }]);
});
