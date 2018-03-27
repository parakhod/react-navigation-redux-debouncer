'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var navLocked = false;
var lastActionType = null;

var navigationDebouncer = function navigationDebouncer() {
  var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 600;
  return function () {
    return function (next) {
      return function (action) {
        if (action.type.split('/')[0] === 'Navigation') {
          if (action.type !== 'Navigation/SET_PARAMS' &&
            action.routeName !== 'DrawerToggle' &&
            action.routeName !== 'DrawerOpen' &&
            action.routeName !== 'DrawerClose') {
            if (navLocked && action.type === lastActionType) {
              return;
            }
            setTimeout(function () {
              return navLocked = false;
            }, interval);
            navLocked = true;
            lastActionType = action.type;
          }
        }
        next(action);
      };
    };
  };
};

exports.default = navigationDebouncer;