'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var navLocked = false;

var navigationDebouncer = function navigationDebouncer() {
  var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 600;
  return function () {
    return function (next) {
      return function (action) {
        if (action.type.split('/')[0] === 'Navigation') {
          if (navLocked) {
            return;
          } else {
            setTimeout(function () {
              return navLocked = false;
            }, interval);
            navLocked = true;
          }
        };
        next(action);
      };
    };
  };
};

exports.default = navigationDebouncer;